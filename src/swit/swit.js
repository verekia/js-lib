// @flow

import cloneDeep from 'lodash.clonedeep'
import isEqual from 'lodash.isequal'

import cond from '../cond'

const swit = (val: any, cases: any[][], defaultVal: any) =>
  cond(
    cases.map(c => {
      const newCase = cloneDeep(c)
      newCase[0] = isEqual(c[0] instanceof Function ? c[0]() : c[0], val)
      return newCase
    }),
    defaultVal,
  )

export default swit
