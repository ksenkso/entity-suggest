import { reactive } from 'vue';
import { identity } from '@/lib/utils.js';
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
 * @return {{
 *  suggestions: {options: *[], loading: boolean, error: ApiError | null, value: *[]},
 *  search: (config: Request) => Promise<void>
 * }}
 */
export const useSuggestions = ({
  initialValue = [],
  responseAdapter = identity,
} = {}) => {
  const suggestions = reactive({
    loading: false,
    options: initialValue,
    error: null,
    value: [],
  });

  let abortController = new AbortController();
  let currentRequest = null;

  const makeRequest = (requestConfig) => {
    if (currentRequest) {
      abortController.abort();
      abortController = new AbortController();
    }

    suggestions.loading = true;
    suggestions.error = null;

    currentRequest = fetch(requestConfig.url, {
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
        console.log(error);
      })
      .finally(() => {
        suggestions.loading = false;
        currentRequest = null;
      });

    return currentRequest;
  };

  return {
    suggestions,
    search: makeRequest,
  };
};
