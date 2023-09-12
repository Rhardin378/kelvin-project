// I delcared a variable kelvin as a constant and assigned it the value of 293 
const kelvin = 293
// I declared a variable celsius and assigned it the value of subtracting 273 from kelvin due to celsius being 273 degrees less than kelvin 
const celsius = kelvin - 273
// I declared a variable fahrenheit using let so the variable is able to be changed at a later time and assigned it the value of the formula used to convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32
// I assigned the variable fahrenheit the value that is the result of calling Math.round on fahrenheit to round down the number
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature in Newton is currently ${newton} newtons.`)
