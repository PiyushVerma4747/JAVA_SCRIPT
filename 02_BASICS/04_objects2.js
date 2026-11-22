// Singleton object
const tinderUser = {}
tinderUser.id = "123gasg"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "somegamil.com",
    fullname:{
        userfullname: {
            firstname:"Piyush",
            lastname: "Verma"
        }
    }
}
console.log(regularUser)
// console.log(regularUser.fullname.userfullname.lastname)
// console.log(regularUser.fullname.userfullname?.lastname) // OPTIONAL CHAINING(?):(just for protection) checks wheather fullname exist or not 

//COMBINING OBJECTS
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

const obj3 = {obj1 , obj2}
// console.log(obj3)

const obj4 = Object.assign(obj1, obj2) // in this case target === returnedTaget ie saare objects object1 me jaa rahe honge
const obj5 = Object.assign({}, obj1, obj2) // optional parameter but garrenteed object result
// console.log(obj4)
console.log(obj5) // both gives same ans 

// SO REAL SYNTAX
// const returnedTarget = Object.assign(target , source)

// by SPREAD OPERATOR (mostly used in production)
const merge = {...obj1 , ...obj2}
// console.log("Merged By Spread Operator :" , merge)

// When Values Comes From DataBAse(generally array of object)
const users = [
    {
        id : 1,
        email : "13jh@gmail.com"
    },
    {
        id : 12,
        email : "1h3jh@gmail.com"
    },
    {
        id : 13,
        email : "1gggf3jh@gmail.com"
    }
]
console.log(users[1].email)
 
console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // array of keys 
// console.log(typeof Object.keys(tinderUser))  // but type is object

// console.log(Object.values(tinderUser)) // array of keys 
// console.log(typeof Object.values(tinderUser))  // but type is object

// console.log(Object.entries(tinderUser)) // array of keys 
// console.log(typeof Object.entries(tinderUser))  // but type is object

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // true
// console.log(tinderUser.hasOwnProperty("isLoggedIn'"))  // false
