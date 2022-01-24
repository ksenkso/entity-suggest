export function debounce (func, wait) {
  let timeout;

  return function executedFunction () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;

      func.apply(context, args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
  };
}

export const identity = (x) => x;
