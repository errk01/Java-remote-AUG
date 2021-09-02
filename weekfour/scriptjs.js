// const userOne = {
//     name:'Erik',
//     age: 32,
//     email: 'Erik@email.com'
// }

// const userOne = {
//     name:'Jane',
//     age: 28,
//     email: 'Jane@email.com'
// }



// function User(name,age,email){
//     this.name = name
//     this.age = age
//     this.email = email
// }


// this is now the whole obj
// class User {
//     constructor(name, age, email){
//         this.name = name
//         this.age = age
//         this.email = email
//     }
//     ageByOne(){
//         this.age +=1
//     }

//     static staticMethod(){
//         console.log('hello');
//     }
// }

class User {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }

    // get name(){
    //     return this.name
    // }

    // set name(newName){
    //     this.name = newName
    // }
   
}

// creating a new obj
// const erik = new User("Erik",32,"Erik@Email.com")
const jane = new User("Jane",28, "Jane@mail.com")

console.log(jane.name)

jane.name = "Sara"
console.log(jane.name)


