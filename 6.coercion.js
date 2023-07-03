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