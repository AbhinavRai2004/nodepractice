// console.log("Start exe... ")

// setTimeout(() => {
//     console.log("logic exe... ")
// }, 2000)

// console.log("complete exe... ")

//  Drawback of asynchronous.

let a = 10
let b = 0

setTimeout(() => {
    b = 20
}, 2000)

console.log(a + b)