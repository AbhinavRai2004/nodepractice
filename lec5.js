// import { a } from './file'  can not used in node js but in js we can use because in node js the older version of js will run.

// this is the way in which we can use var of another file to other file in node JS.
const file = require('./file')

var x = 20
console.log(x)
console.log(file.a)
console.log(file.z())