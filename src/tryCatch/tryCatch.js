// @flow

const tryCatch = (tryFn: Function, catchFn: Function, finallyFn?: Function) => {
  if (!tryFn || !catchFn || typeof tryFn !== 'function' || typeof catchFn !== 'function') {
    throw Error('tryCatch needs at least 2 function parameters for try and catch.')
  }
  if (finallyFn && typeof finallyFn !== 'function') {
    throw Error('The third parameter must be a function for finally.')
  }
  try {
    return tryFn()
  } catch (err) {
    return catchFn(err)
  } finally {
    if (finallyFn) {
      finallyFn()
    }
  }
}

export default tryCatch
