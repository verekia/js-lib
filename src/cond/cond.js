// @flow

/* eslint-disable no-nested-ternary */

const cond = (cases: any[][], defaultVal: ?any) => {
  const foundCase = cases.find(c => (c[0] instanceof Function ? c[0]() : c[0]))
  const returnVal = foundCase ? foundCase[1] : defaultVal
  return returnVal instanceof Function ? returnVal() : returnVal
}

export default cond
