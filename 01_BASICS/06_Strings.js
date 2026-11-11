// let name = "Piyush"
// let repoCount = 10
// console.log(name + repoCount + "  value") // outdated method

// console.log(`My name is ${name} and my repocount is ${repoCount} .`) // string interpolation

// const gameName = new String("Piyush Verma")
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf(" "))

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))
// console.log(gameName.split('-'));

// ==========================================
// 1. BASIC STRING METHODS
// ==========================================
console.log("BASIC STRING METHODS")
let str = "  Hello JavaScript  ";

// length - Returns the length of string
console.log(str.length);           // Output: 20

// toUpperCase() - Converts string into uppercase
console.log(str.toUpperCase());    // Output: "  HELLO JAVASCRIPT  "

// toLowerCase() - Converts string into lowercase
console.log(str.toLowerCase());    // Output: "  hello javascript  "

// trim() - Removes spaces from both ends
console.log(str.trim());           // Output: "Hello JavaScript"

// trimStart() - Removes spaces from starting
console.log(str.trimStart());      // Output: "Hello JavaScript  "

// trimEnd() - Removes spaces from ending
console.log(str.trimEnd());        // Output: "  Hello JavaScript"


// ==========================================
// 2. SEARCHING STRING METHODS
// ==========================================
console.log("SEARCHING STRING METHODS")
let text = "Hello JavaScript";

// indexOf() - Returns first occurrence index
console.log(text.indexOf("Java"));       // Output: 6

// lastIndexOf() - Returns last occurrence index
console.log(text.lastIndexOf("a"));      // Output: 10

// includes() - Checks whether substring exists
console.log(text.includes("Script"));    // Output: true

// startsWith() - Checks starting characters
console.log(text.startsWith("Hello"));   // Output: true

// endsWith() - Checks ending characters
console.log(text.endsWith("Script"));    // Output: true

// search() - Searches using string or regular expression
console.log(text.search("Java"));        // Output: 6


// ==========================================
// 3. EXTRACTING STRING METHODS
// ==========================================

console.log("EXTRACTING STRING METHODS")
let language = "JavaScript";

// slice() - Extracts a portion of string
console.log(language.slice(0, 4));       // Output: "Java"

// substring() - Extracts characters between indexes
console.log(language.substring(4, 10));  // Output: "Script"

// charAt() - Returns character at specified index
console.log(language.charAt(2));         // Output: "v"

// at() - Returns character at index (supports negative index)
console.log(language.at(-1));            // Output: "t"


// ==========================================
// 4. REPLACING STRING METHODS
// ==========================================
console.log("REPLACING STRING METHODS")
let str1 = "Hello World";

// replace() - Replaces first matching occurrence
console.log(str1.replace("World", "JavaScript"));
// Output: "Hello JavaScript"

let str2 = "apple apple apple";

// replaceAll() - Replaces all matching occurrences
console.log(str2.replaceAll("apple", "mango"));
// Output: "mango mango mango"


// ==========================================
// 5. SPLITTING AND JOINING METHODS
// ==========================================
console.log("SPLITTING AND JOINING METHODS")
let str3 = "Java,Python,C++";

// split() - Converts string into an array
console.log(str3.split(","));
// Output: ["Java", "Python", "C++"]

let a = "Hello";
let b = " World";

// concat() - Joins two or more strings
console.log(a.concat(b));
// Output: "Hello World"


// ==========================================
// 6. OTHER IMPORTANT STRING METHODS
// ==========================================
console.log("OTHER IMPORTANT STRING METHODS")
let str4 = "Hi";

// repeat() - Repeats string specified number of times
console.log(str4.repeat(3));       // Output: "HiHiHi"

// padStart() - Adds padding at beginning of string
console.log(str4.padStart(5, "*")); // Output: "***Hi"

// padEnd() - Adds padding at end of string
console.log(str4.padEnd(5, "*"));   // Output: "Hi***"

// match() - Returns matches using regular expression
console.log("Hello123".match(/[0-9]+/));
// Output: ["123"]

// matchAll() - Returns all matches using regular expression
console.log([...("a1 b2 c3".matchAll(/[a-z](\d)/g))]);
// Output: [ ["a1", "1"], ["b2", "2"], ["c3", "3"] ]
// Note: Each match also contains index and input properties.

// localeCompare() - Compares two strings based on locale
console.log("apple".localeCompare("banana"));
// Output: -1 (negative value)


// ==========================================
// BONUS: STRING IMMUTABILITY
// ==========================================
console.log("BONUS: STRING IMMUTABILITY")
let original = "hello";

// Strings are immutable (original string does not change)
original.toUpperCase();

console.log(original);              // Output: "hello"

// Store modified string using reassignment
original = original.toUpperCase();

console.log(original);              // Output: "HELLO"








