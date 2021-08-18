console.log("Hello, form the JS file");

// let stuff

// stuff = 10

/** Block comment */

// single line comment

// let

// snake case
let my_new_number = 27;

// camel case

let myFavoritNum = 16;

// pascal case

let MyNewNum = 56;

// const: unchangable

const num = 7;

// num = 15

let myNum = 10;

myNum = 8;

let sum = num + 10;
let sub = num - 5;
let multi = myNum * 10;
let div = 17 / 3;

let mod = 17 % 3;

// console.log("div",div)

// console.log("mod",mod)

let str = "hello ";
let str2 = "yo";

let result = str + str2;

//Boolean true or false

let isTrue = false;
let isFalse = true;

let i = "something";

i = "9";
// let a = 7 == "7"

// console.log(typeof x)

// let x = 7+7+7
// let x = '7'+7+7

// Explicit coercion

// let amountRaised = 1000

// let donation = prompt("what is your donation?")

// amountRaised = Number(donation) + amountRaised

// console.log(amountRaised)

// let y = parseInt("10")

// let y = parseFloat("10.5555")
// let y = Number("10.5555")

// let newStr = toString(4.99)

// Template literals
let gretting = "Hi,";
let myName = "Erik!";

// console.log(gretting + myName)
// console.log(gretting + " "+ myName)

console.log(`${gretting} ${myName}. how are you?`);

let foo;

// if else statments

// let isX = true

// if(isX){
//     console.log(true)
// }else if(x == true){
//     console.log("this shouldn't run")
// }else{
//     console.log(false)
// }

let temp = 20;

// if(temp > 45){
//     console.log("go outside")
// }else{
//     console.log("Nope, calling in sick, too cold");
// }

// let x = 10

// if(x == '10'){
//     console.log(true)
// }

// if(x === '10'){
//     console.log(true)
// }else{
//     console.log(false)
// }

if ("abc") {
}

let whatever;

// if(whatever){
//     console.log(true)
// }else{
//     console.log(false)
// }

// if(!whatever){
//     console.log(false)
// }else{
//     console.log(true)
// }

if (false || 0 || null) {
  console.log(true);
}

// && both have to be true
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// || only one has to be true
true || true; // true
true || false; // true
false || true; // true
false || false; // false

/**The for loop*/
// for(Start, end/condition, incurment value)

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// let x = 0

/**The while loop*/
// while(x > 10){
//     // x = x+1;
//     // x +=1;
//     x++
//     console.log(x)
// }

/**The do while loop. It will always run once*/
// let x = 0

// do{
//     // x = x+1;
//     // x +=1;
//     x++
//     console.log(x)
// }while(x > 10)

// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before break'); // will only print once
// 	break; // exits the next loop
// 	console.log('after break'); //never happens
// }

// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before continue'); // will print 10 times
// 	continue; // continues to the next iteration
// 	console.log('after continue'); //never happens
// }

let x = 1;

switch (x) {
  case 3:
    console.log(3);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;

  default:
    console.log("break out of the loop");
    break;
}
