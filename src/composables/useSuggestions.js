import { reactive } from 'vue';
import { debounce, identity } from '@/lib/utils.js';
/**
 * @typedef {{
 *   code: number;
 *   message: string;
 *   data: unknown;
 *   additional: unknown;
 * }} ApiError
 */
/**
 * @param {object}
 * @param {any[]} initialValue
 * @param {(data: any) => any} responseAdapter
 * @param {number} [debounceTimeout=300]
 * @return {{
 *  suggestions: {options: *[], loading: boolean, error: ApiError | null, value: *[]},
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
    suggestions.error = null;

    return fetch(requestConfig.url, {
      signal: abortController.signal,
      ...requestConfig,
    })
      .then(async (response) => {
        const body = await response.json();
        if (response.ok) {
          suggestions.options = responseAdapter(body);
        } else {
          suggestions.error = body;
        }
      })
      .catch(error => {
        console.error(error);
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
