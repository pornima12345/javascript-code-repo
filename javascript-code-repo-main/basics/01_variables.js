const accountId = 144553
let accountEmail = "yz@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed

accountEmail = "as@hjed.com"
accountCity ="Pune"
console.log(accountId);

/*
Prefer not to use var, because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountCity, accountState])