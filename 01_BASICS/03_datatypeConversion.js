// Lec 6 Datatype Conversion Confusion 
// let score = 33
// let Score ="67"
// console.log(typeof score) // number
// console.log(typeof (Score)) // number

// let scoreInNumber = Number(Score) // here N of number is capital due to Class concept 
// console.log(typeof scoreInNumber) 

// console.log("Lets Investigate")

// let newScore="75ab" 
// let newScoreInNumber = Number(newScore)
// console.log(typeof newScoreInNumber) // number 
// console.log(newScoreInNumber) // NaN 

// let age=null
// let newAge = Number(age)
// console.log(newAge) // 0
// console.log(typeof newAge) // number 

// let temperature = undefined
// let newTemp = Number(temperature)
// console.log(newTemp) // NaN
// console.log( typeof newTemp) // number

// let bol1 = true 
// let newBol = Number(bol1)
// console.log(newBol) // 1

// let bol2 = false
// let newBol2 = Number(bol2)
// console.log(newBol2) // 0

// let name="Piyush"
// console.log(Number(name)) // NaN

// let isLoggedIn=" "
// let booleanLoggedIn = Boolean(isLoggedIn)
// console.log(booleanLoggedIn) // true
// // 0=>false 1=>true ""=>false " "=>true "hekm"=>true 

// let someNumber=33
// let stringNumber= String(someNumber)
// console.log(stringNumber) // 33
// console.log(typeof stringNumber) //string


//##################################  OPERATIONS #############################################
// let value = 3
// let negValue= - value 
// console.log(negValue) 
// console.log("ArithmeticOperation")
// console.log(2+2)
// console.log(3-4)
// console.log(4*3)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

// let str1="Hello!"
// let str2=" Piyush Verma"
// console.log(str1 + str2) 

// console.log("1"+2) // 12
// console.log(1+"2") // 12
// console.log("1"+2+2) // 122
// console.log(1+2+"2") // 32 To explore more such confusions go to ecma script

// some more tricky conversion

// console.log(+true) // 1
// console.log(true+) // gives error

// console.log(+"") // 0
// console.log(Number(" ")) //0
// console.log(+" ")//0

// let x=3
// let y=x++
// console.table([x , y])

// let p=5
// let q=++p 
// console.log([p,q])



















