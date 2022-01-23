export function debounce (fn, timeout) {
  let debounced = false;

  return function () {
    if (debounced) return;

    fn.apply(this, arguments);

    debounced = true;

    setTimeout(() => {
      debounced = false;
    }, timeout);
  };
}

export const identity = (x) => x;
