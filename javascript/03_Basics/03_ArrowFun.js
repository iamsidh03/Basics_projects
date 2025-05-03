//Let’s explore arrow functions in JavaScript. Arrow functions, also known as fat arrow functions

/**
 * syntax
 * const functionName =(parameter) =>{
 * //function body
 * return value;
 * } 
 */

//You can omit the curly braces {} and the return keyword if the function has only one statement.
/*
//example

const sayHello=() =>{
    return "hello world";

};
console.log(sayHello);
*/

//Shorter Syntax:
/**
 * const sayHi=()=>"hii everyone";
 * console.log(sayHi());
 */

//Parameters
/*
const add=(a,b)=>a+b;
console.log(add(5,3));
*/

/**
  No Binding of this:
 
Arrow functions do not have their own this context.
They inherit the this value from the surrounding (lexical) context.
This behavior is different from regular functions.
 */

const person ={
    name:"Siddharth",
    greet:function(){
        //regular function
        console.log("hello "+this.name);
    },
    greetArrow:()=>{
            console.log("Hi "+this.name  )
    }
}
person.greet();// Output: Hello, Alice
person.greetArrow(); // Output: Hi, undefined

