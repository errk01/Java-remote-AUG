// function greeting(userInput){
//     console.log(userInput)
// }

// greeting(5)

// Creating the function
// function add(number1, number2){
//     // telling it what we want it to do
//      return number1+number2
// }
// // calling the function with the correct set of params
// let sum = add(15,37)
// console.log(sum)

// Arrow function
// const add = (num1, num2) =>{
//     return num1+num2
// }

// let sum = add(2,5)
// console.log(sum)

// function add(num1 = 3, num2 = 5){
// return num1+num2
// }

// let sum = add()
// console.log(sum)
// function add(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }

//     let sum = add(1,2,3,4,5,66,7,7,8,9,0,9,0)
//     console.log(sum)

// function subtract(num, str,...arr){
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum -= arr[i]
//     }
//     return sum
// }

// let sum = subtract(1,2,3,4,5,66,7,7,8,9,0,9,0)

// console.log(sum)

// hoisted(1,2)

// function hoisted(a,b){
//     console.log(a+b)
// }

// add(2,3)
// // variable function
// let add = function(a,b){
//   console.log(a+b)
// }

// let calculator = {
//     add:(a,b)=>{
//         return a+b;
//     }
// }
// calculator.add(3,7)

// if (condition) {

// } else {

// }

// variables created outside of the function
// Global scope
// var greeting = "welcome";

// //https://developer.mozilla.org/en-US/docs/Glossary/Scope
// function getGreeting(name) {
//   // local scope
//   var greeting = "hello ";
//   return greeting + name;
// }
// let hello = getGreeting("Bob");
// console.log(hello);

// console.log(greeting);




// (function(){
//     let my = "some string "
//     console.log(my)
// })()

// let city = "NOLA"

// let greet = function(){
//     console.log('Hello, '+ city)
// }

// greet();


// function outer(){

//     let x = 'x'

//     function inner(){
//         let y = 'y'
//         console.log(x)
//     }

//     console.log(y)
//     inner()
// }


// outer()


// let landscape = function(){
//     let result = ""


//     let flat = function(size){
//         for(let count = 0; count < size; count++){
//             result += " _ "
//         }
//     }

//     let mountain = function(size){
//         result += "/"
//         for(let count = 0; count < size; count++){
//             result += " '"
//             result+="\\"
//         }

//     }

//     flat(3)
//     mountain(4)
//     flat(6)
//     mountain(1)
//     flat(1)

//     return result;

// }

// console.log(landscape())


// let name = "John"

// let greet = function(name){
//     name = "Dave"
//     console.log(name)
// }
// greet('Ann')

// function outer(){

//     function inner() {

//     }

//     inner()
// }

// outer()

// let teacher = {
//     name: "Asdf",
//     sayName: function(){
//         console.log(this.name)
//     }
// }

// teacher.sayName()


// function sayName(){
//     console.log(this.name)
// }

// let teacher1 = {
//     name:'Asdf',
//     speak: sayName
// }

// let teacher2 = {
//     name:"Shane",
//     speak:sayName
// }


// teacher1.speak()
// teacher2.speak()



let car = {
    brand:"Ford",
    getBrand: function(){
        return this.brand
    }
}


let bike = {
    brand: 'Gsxr 1000'
}


let brand = car.getBrand.bind(bike)
console.log(brand())































