const _ = require('lodash')

const Items = [1,[12],34]

const newitems = _.flattenDeep(Items)
console.log(newitems)