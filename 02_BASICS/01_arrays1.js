// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(typeof myArr) // object : in JS arrays are special type of objects .
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// make shalllow copy

// Array methods

// myArr.push(6) 
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(35) // shift remove first element and ignore the arguments 
console.log(myArr)
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join("#") // adds all the elements of a array into a string by a specifed separator if not provided it separates by ,

// console.log(myArr); // [1,2,3,4,5]
// console.log(typeof myArr) // object
// console.log( newArr); // 1,2,3,4,5 
// console.log(typeof newArr) // string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // last range include nhi hoti hai and no change in original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // last range include and extract the original array ie remove extracted elements from the original array .
console.log("C ", myArr);
console.log(myn2);

// difference btw slice and splice