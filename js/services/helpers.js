export const debounce = (func, wait = 1000) => {
  let timeout;
  return function getDebounced(...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => func(...args), wait);
  };
};
