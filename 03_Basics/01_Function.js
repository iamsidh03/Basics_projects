function sayMyName(){
    console.log("siddharth")
}

//sayMyName()

function addTwoNumber(number1,number2){
    return number1+number2;
}
const result= addTwoNumber(3,5);
//console.log("Result ", result);


function isLogedin(username="sam"){
    if(!username){
        console.log("PLEASE LOGIN")
    }
    console.log(`${username} is Logedin`)
}
//console.log(isLogedin("siddharth"))
//console.log(isLogedin("sam"))


function tellValue(val1,val2,...num1){
    return num1
}

//console.log(tellValue(20,10,40,50,60))

/*This function takes two parameters, val1 and val2, and a rest parameter, ...num1
// The rest parameter syntax allows you to pass an arbitrary number of arguments to a function as an array
*/

const user={
    username:"Siddharth",
    price:100
}
/*To access a property of an object,
 you can use the dot notation (object.property) or the bracket notation (object["property"]) */
function handleObject(anyObject){
    console.log(`userName is ${anyObject.username} and price is ${anyObject.price} `)

}
//handleObject(user)
handleObject({
    username:"sid",
    price:2000000
})
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 800, 500, 1000]));


