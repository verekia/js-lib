// @flow

import tryCatch from './tryCatch'

/* eslint-disable no-console */

console.log(tryCatch(() => 3, ex => console.error(ex), () => console.log('finally')))
