function topLevelFunction () {
  function nestedFunction (arg) {
    return arg
  }
  return 1
}

const bbb = require('./b')
const {ccc, ddd} = require('./c')