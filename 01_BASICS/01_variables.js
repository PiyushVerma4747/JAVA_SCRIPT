const accountId = 12782
let accountEmail = "ps87r4@gmail.com"
var accountPassword = "776328654"
accountCity = "Jaipur"
let accountState 

// accountId = 5 //this gives error because we cannot reassign the constants .
accountEmail="jkhgd@gmail.com"
accountPassword = "878965"
accountCity = "Ayodhya"
/*
Prefer not to use var
Because of the issue of block scope and functional scope 
*/


console.log(accountId);
console.table([accountId ,accountEmail , accountPassword , accountCity , accountState] )

