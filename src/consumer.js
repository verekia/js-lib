// @flow

/* eslint-disable no-console */

import swit from './swit'
import cond from './cond'

console.log(swit('BAR', [['FOO', () => 'foo'], [() => 'BAR', 'bar']], () => 'def'))
console.log(cond([[true, 'hi'], [true, 'hi2']], 'def'))
