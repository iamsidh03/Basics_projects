//1.Global Scope
/*
A variable declared at the top level of your program (outside any function) has global scope.
It can be accessed from anywhere in your JavaScript code.

//example-01


let globleVar=10;
function varr(){
    console.log(globleVar);
}
varr();
*/

//2.Local (Function) Scope:
/*
Variables declared within a function are local to that function.
They are only accessible within the function



function funLocal(){
    let localVar=100;
    console.log(localVar);
}
funLocal();
/*
console.log(localVar) 
gives error because local variable not defined outside the function
*/
/*

3.Block Scope (Introduced by let and const):

Before ES6 (2015), JavaScript had only global and function scope.
ES6 introduced block scope using let and const.
Variables declared inside a { } block (such as loops or conditionals) have block scope.
They are not accessible outside that block.

Example

if(true){
    let blockVar="Block variable only accessible within the block";
    console.log(blockVar)
}
console.log(blockVar)//gives error it won't accessible here
*/

/*

4.Function Scope:

Each function creates a new scope.
Variables defined inside a function are not visible outside that function.
Both var, let, and const have function scope.

example:
function outerFunction() {
    var functionVar = "I am inside outerFunction!";
    console.log(functionVar); // Accessible here
}
// console.log(functionVar); // Error: functionVar is not defined outside outerFunction

 */

/*
5.Lexical (Static) Scope:

Lexical scope refers to the nesting of functions within each other.
A function can access variables from its own scope and any outer (enclosing) scopes

function outer() {
    let outerVar = "I am in outer!";
    function inner() {
        console.log(outerVar); // Accessible here (lexical scope)
    }
    inner();
}
outer();

*/
/*
6.Automatically Global Variables:
If you assign a value to a variable that has not been declared,
 it becomes a global variable automatically. */

function myfun(){
    carName="audi"
}
myfun();
console.log(carName) // Accessible globally
