// main things in JS are objects and web events
// two methods of making objects 
// By Constructors and By Literals
// jab ham literals ki tarah declare karte hai to singleton nhi banta hai 
// jab constructors se declare karte hai to singleton banta hai 
// contructor method=> object.create
// literals methods=> const UserJS = {}


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // there is no other method by which you can access this value by . operator isliye ham [] bracket method bhi padte hai 
    mySym: "mykey1", // Normal String
    [mySym]: "mykey1", // Symbol String 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(JsUser.mySym) 

// difference btw  mySym: "mykey1", // Normal String and
 //   [mySym]: "mykey1", // Symbol String
// console.log(Object.keys(JsUser));
// console.log(Object.getOwnPropertySymbols(JsUser));

// CHANGE OBJECT AVLUES 
JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser) // BY THIS CHANGES WILL NOT BE PROPOGATES
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // STRING INTERPOLATION
}
console.log(JsUser.greeting); // FUNCTION EXECUTE NHI HUA BAS FUNCTION KA REFERENCE AAYA HAI 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());