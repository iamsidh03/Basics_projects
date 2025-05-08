// function calculateArtithmetic(a,b,type){
//     if(type=='sum'){
//         const value =sum(a,b);
//         return value;
//     }
//     if(type=='minus'){
//         const value =minus(a,b);
//         return value;
//     }
// }
// function sum(a,b){
//     return a+b;
// }
// function minus(a,b){
//     return a-b;
// }
// const value=calculateArtithmetic(5,3,'sum');
// console.log(value); // 8

// third variable is function itself
// function calculateArtithmetic(a,b,arithmeticfunction){

//     const ans=arithmeticfunction(a,b)
//     return ans;
    
// }
// function sum(a,b){
//     return a+b;
// }
// function minus(a,b){
//     return a-b;
// }
// const value=calculateArtithmetic(5,3,sum);
// console.log(value); // 8

// when i call the function calculateArtithmetic, I pass the function sum as a third parameter.--> call back function

//setTimeout

function greet(){
    console.log('hello world');
}
setTimeout(greet ,3*1000); // 3 sec
setInterval(greet ,3*1000); // 3 sec
// setTimeout is a function that takes a function as an argument and executes it after a specified time interval. 