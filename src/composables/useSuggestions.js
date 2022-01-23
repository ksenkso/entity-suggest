import { reactive } from 'vue';
import { debounce, identity } from '@/lib/utils.js';

/**
 * @param {object}
 * @param {(data: any) => any} responseAdapter
 * @param {number} [debounceTimeout=300]
 * @return {{
 *  suggestions: {options: *[], loading: boolean, error: null, value: *[]},
 *  makeRequest: (config: Request) => Promise<void>
 * }}
 */
export const useSuggestions = ({
  debounceTimeout = 300,
  responseAdapter = identity,
} = {}) => {
  const suggestions = reactive({
    loading: false,
    options: [],
    error: null,
    value: [],
  });

  const abortController = new AbortController();
  let currentRequest = null;

  const makeRequest = (requestConfig) => {
    if (currentRequest) {
      abortController.abort();
    }

    suggestions.loading = true;

    return fetch(requestConfig.url, {
      signal: abortController.signal,
      ...requestConfig,
    })
      .then(response => response.json())
      .then(options => {
        suggestions.options = responseAdapter(options);
      })
      .catch(error => {
        suggestions.error = error;
      })
      .finally(() => {
        suggestions.loading = false;
        currentRequest = null;
      });
  };

  const select = (options) => {
    if (Array.isArray(options)) {
      suggestions.value = options;
    } else {
      suggestions.value = [options];
    }
  };

  return {
    suggestions,
    search: debounce(makeRequest, debounceTimeout),
    select,
  };
};
