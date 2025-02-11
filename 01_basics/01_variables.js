const accountId=12345 
let accountEmail="akashnayak2001@gmail.com"
var accountPassword=12345 //(prefer not use var because of issue in block scope and functional scope)
accountCity="jaipur" //(this is a bad practice should use let or constant keyword)
let accountState

//accountID=1234567890 (const is not allowed to change or update)

accountEmail="shdfgsfybsrfhur@gmail.com"
accountPassword=1234567890
accountCity="bengalur"


console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

