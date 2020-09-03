export function getData(event) {
  return event.target.dataset
}

export function debounce(fn, delay) {
  let timeout
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export function moduleState(store, moduleName) {
  return store.getState().modules[moduleName]
}
