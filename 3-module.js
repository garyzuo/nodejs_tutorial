// CommonJS, every file is mudule (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names)
// const data = require('./6-alternative')
// console.log(data)
require('./7-mind-grenade')

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);