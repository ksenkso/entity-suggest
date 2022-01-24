import { reactive } from 'vue';
import { debounce, identity } from '@/lib/utils.js';

/**
 * @param {object}
 * @param {any[]} initialValue
 * @param {(data: any) => any} responseAdapter
 * @param {number} [debounceTimeout=300]
 * @return {{
 *  suggestions: {options: *[], loading: boolean, error: Error | null, value: *[]},
 *  search: (config: Request) => Promise<void>
 * }}
 */
export const useSuggestions = ({
  initialValue = [],
  debounceTimeout = 300,
  responseAdapter = identity,
} = {}) => {
  const suggestions = reactive({
    loading: false,
    options: initialValue,
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

  return {
    suggestions,
    search: debounce(makeRequest, debounceTimeout),
  };
};
