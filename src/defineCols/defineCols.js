// @flow

import keyBy from 'lodash.keyby'

const defineCols = (colNames: Array<string>, options?: Object) => {
  let newColNames = [...colNames]

  if (!options || (options && options.id !== false)) {
    newColNames.push('id')
  }

  if (!options || (options && options.timestamps !== false)) {
    if (options && options.camelCaseTimestamps === true) {
      newColNames = newColNames.concat(['createdAt', 'updatedAt'])
    } else {
      newColNames = newColNames.concat(['created_at', 'updated_at'])
    }
  }

  return keyBy(newColNames)
}

export default defineCols
