//array
/* Symbols are a special type of value in JavaScript that can be used as keys for object properties */
/*Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally2. This is one of the basic types of design patterns */
//In JavaScript, an object literal is a way of creating an object using a comma-separated list of key-value pairs enclosed in curly braces {}


const mySym=Symbol("Key1")
/*//This creates a new symbol value and assigns it to the constant variable mySym.
 The string "Key1" is an optional description for the symbol, but it does not affect its uniqueness or identity */
const JsUser={
    name:"Siddharth",
    "Full name":"Siddharth Raj",
    age:21,
    location:"Dhanbad",
    email:"xyx@gmail.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}
/*
//This creates an object literal and assigns it to the constant variable JsUser.
 The object has eight properties, each with a key and a value.
  The keys can be either identifiers (such as name, age, etc.) or strings (such as "Full name"). The values can be any type of data, such as strings, numbers, booleans, array or even function.
*/

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(JsUser[mySym]);
/*
These are four ways of accessing the properties of the object JsUser.
     The dot notation (JsUser.email) and the bracket notation with a string (JsUser["email"]) are equivalent and can be used for any valid identifier key.
 The bracket notation with a string can also be used for keys that are not valid identifiers, such as "Full name". 
 
 The bracket notation with a symbol (JsUser[mySym]) can be used to access the property that has a symbol as a key.
  Note that the symbol key is not visible when using console.log(JsUser) or Object.keys(JsUser),
   as symbols are not enumerable by default.
*/

JsUser.email="Raj@gmail.com"
/*//This updates the value of the email property of the object JsUser to "Raj@gmail.com". */

//console.log(JsUser)
//Object.freeze(JsUser)
//console.log(JsUser)

/*//These are three ways of displaying the object JsUser.
 The first one prints the object as a string with all its properties and values. 
 
 The second one freezes the object, which means that it prevents any changes to the object, such as adding, deleting, or updating properties. 
 
 The third one prints the object again, but this time it will be the same as before, since it is frozen and cannot be modified.
 */

JsUser.greeting=function(){
    console.log("Hello JS User")
}
JsUser.greetingtwo=function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())

//