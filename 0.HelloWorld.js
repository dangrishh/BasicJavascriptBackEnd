console.log("Hello World!"); // Hello World

// Variables

console.log('-----Variables in Javascript-----')
let num = 2 + 2
console.log(num)            // 4
console.log(num + 3)        // 7
console.log()

const userName = "Daniel"
const lastName = 'De Torres'
console.log(userName + " " + lastName)
console.log()

console.log("-----Constant Javascript-----")
console.log("-- NOTE! the constant variable is (const pi = 3.14 )")
let radius = 5              // kapag let pede kapag magextension like let.
const pi = 3.14             // kapag const di na pede dahil naka const nasya.
let area

radius = 8
area = pi * radius * radius
console.log(area)
console.log()

console.log("-----Data Types 1----- (typeof)")
let num1 = 8
let user = 'Hello'
let num2 = 5/0
let num3 = 100_00_000
let num4 = 1.5e12
let num5 = 1050505050505050505005051n

console.log(typeof num1 + " - 8 ")
console.log(typeof user + " - Hello ")
console.log(num2 + " - infinity is a Number ")
console.log(num3 + " the ',' for the Number is '_' ")
console.log(num4 + " - the hexa is a part num ")
console.log(num5 + 2n + "  - they are possible to convert because same text ");
console.log()

console.log('-----Data Types 2 -----(about string new tab/delete/vertical and Boolean');
let user1 = "Dan\tiel \nDe Torres"
let bool = 5 < 6
let null1 = null
let undef
let num6 = 5

console.log(user1 + " - new line and tab.")
console.log(bool)
console.log(typeof null + " - is a Object")
console.log(undef + " - this a Ex. of Undefined")
console.log(5 / "Daniel" + " - like typeof but meaning NaN is type of Number")
console.log()

console.log("-----Type of Conversion & Coercion-----")
console.log()
console.log("-----This is a Conversion!")
let num7 = Number("123")
let num8

console.log(num7, typeof num7 + " - conversion string to int")
console.log(num8, typeof num8 + " - conversion string to int")
console.log()

console.log(" -----And this is a Coercion!")

let x 
console.log(x, typeof x)
x = 8
console.log(x, typeof x)
x = x + ""
console.log(x, typeof x)
x = x - 2
console.log(x, typeof x)
x = +x + 2
console.log(x, typeof x)
x = !x
console.log(x, typeof x)      // false boolean because !x ( not X )
console.log(Boolean("Hello")) // possible False, the source img in the chatbox of FB Danyel De Torres   
console.log()

let y = parseInt("m123.2 Daniel30")
console.log(y)
let z = parseInt("123,2 Daniel30") // there are possible 123 or 123.5 or something (,) (letter in the end)
console.log(z)


console.log("-----This for Arithmetic-----")

let numm = 4
++numm  // pre increment
numm++   // post increment

console.log(num)

let num9 = 4 
let xx = num1++          // post increment
console.log(xx, num1)

let num10 = 4 
let yy = ++num2         // pre increment
console.log(yy, num2)

let num11 = 4                     // Either this "let result = num * num * num"
let result = Math.pow(4,3)       // or else "let result = 4 ** 3"

console.log(result);


