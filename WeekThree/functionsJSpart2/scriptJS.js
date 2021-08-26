function add(num1, num2){
    return num1 + num2
}
// add(5,6)

// High order function 
function doMath(operation, num1, num2){
    return operation(num1, num2)
    //       add(3,7)
}

let sum = doMath(add,3,7)


console.log(sum)



/// filter, find (not really used), map, reduce


// let students = [
//     {name: 'John', average: 90},
//     {name: 'Ringo', average: 58},
//     {name: 'Paul', average: 82}
// ]

// filter 
// let passingStudents = students.filter(function(student){
//     return student.average > 60 
// })

// find
// let passingStudents = students.find(function(student){
//     return student.average > 50
// })

	
// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
//     return `${student.firstName} ${student.lastName}`
// })


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce	
let students = [
	{name: 'Cam Newton', assignmentsCompleted: 6},
	{name: 'Ted Ginn', assignmentsCompleted: 10},
	{name: 'Greg Olsen', assignmentsCompleted: 8}
]

// let total = students.reduce((prevIdx, currIdx)=>{
//     return prevIdx + currIdx.assignmentsCompleted;
// },0)

// console.log(total)


  let superHeroes = [
    ["Batman", "Bruce Wayne"],
    ["Spiderman", "Peter Parker"],
    ["The Flash", "Barry Allen"]
  ]

//   let secretIdentity = superHeroes.map(function(revealArray){
//       return revealArray.join(" is ")
//   })

//   let secretIdentity = superHeroes.map(revealArray=> revealArray.join(" is "))

//   console.log(secretIdentity.join("\n"))

/**
Create an Array named superHeroes shown above
Create a secretIdentity variable
Assign superHeroes.map() to the secretIdentity variable
Assign an anonymous function to superheroes.map() as an argument
Your anonymous function should have one parameter named revealArray
Inside the block of your anonymous function:
You'll be working with revealArray as an argument
Using revealArray, return a string that will join the two array items.
join them together with the string "is" (ie: "Batman is Bruce Wayne")
   */


let players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

// Find a player with the name 'Mike'
let findPlayer = players.find(function(player){
    return player.firstName === 'Mike'
})

console.log(findPlayer)
// Get an array of all players with position 'RB' filter
let findPosition = players.filter(function(player){
    return player.position === "RB"
})
console.log(findPosition)
// Get an array of all the players lastNames map
let allLastNames = players.map(function(player){
    return player.lastName
})
console.log(allLastNames)

// Stretch
// Get an array of the full names of all the running backs with more than 5 touchdowns
let result = players.filter(function(player){
    return player.touchdowns > 5 && player.position === 'RB'
}).map(function(player){
    return `${player.firstName} ${player.lastName}`
})
console.log(result)
// Get the number of touchdowns scored by Running backs
let result2 = players.filter(function(player){
    return player.position === 'RB'
}).reduce(function(total, player){
   return total += player.touchdowns
},0)

console.log(result2)



// setTimeout(function(){
// 	console.log('later')
// },2000);
// console.log('call');


// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Maybe you're fetching data from an API, or getting user input
// 		setTimeout(function(){
// 			console.log('later my name is ' + this.name);
// 		},1000)
		
// 		//Runs immediately
// 		console.log('Now my name is ' + this.name);
// 	}
// }

// teacher.speak();


let teacher = {
	name: 'Shane',
	speak: function() {
		
        // let myName = this.name;
		//Save this to a variable
		let self = this;
		
		//this is visible inside function because of closure
		setTimeout(function(){
			console.log('later my name is ' + self.name);
		},1000);
	}
}

teacher.speak();





