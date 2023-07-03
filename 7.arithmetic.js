console.log("-----This is for Arithmetic-----")

let num = 4
++num  // pre increment
num++   // post increment

console.log(num)

let num1 = 4 
let x = num1++          // post increment
console.log(x, num1)

let num2 = 4 
let y = ++num2         // pre increment
console.log(y, num2)

let num3 = 4                     // Either this "let result = num * num * num"
let result = Math.pow(4,3)       // or else "let result = 4 ** 3"

console.log(result);