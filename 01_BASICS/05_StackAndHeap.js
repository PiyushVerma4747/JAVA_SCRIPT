// Primitive datatype(Stack) => Call by value and Non-Primitive(Heap) => Call by reference
// let instagramName = "thecapsuletunes"
// let anotherName = instagramName
// anotherName="zall02"
// console.log(anotherName)
// console.log(instagramName)

let userOne = {
    email:"user@google.com",
    upi:"user@ibl"
}
let userTwo=userOne
userTwo.email="user@gmail.com"

console.log(userOne)
console.log(userTwo)