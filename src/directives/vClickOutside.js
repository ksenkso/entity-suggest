const CACHE_PROP = '__clickOutside';
const eventName = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

export const vClickOutside = {
  beforeMount (el, binding) {
    if (!checkValue(binding)) return;

    if (!binding.instance) return;

    const handler = e => {
      if (el.contains(e.target)) return;

      el[CACHE_PROP].callback(e);
    };

    el[CACHE_PROP] = {
      handler,
      callback: binding.value
    };

    document.addEventListener(eventName, handler);
  },

  updated (el, binding) {
    if (checkValue(binding)) el[CACHE_PROP].callback = binding.value;
  },

  unmounted (el) {
    el[CACHE_PROP] && document.removeEventListener(eventName, el[CACHE_PROP].handler);
    delete el[CACHE_PROP];
  }
};

function checkValue(binding) {
  if (typeof binding.value !== 'function') {
    console.error('Value for v-click-outside should be a function');
    return false;
  }

  return true;
}
