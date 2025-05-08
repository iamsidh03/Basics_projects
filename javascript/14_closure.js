//let name='raju' //global variable
function outerFunction(){
    {
        let name="Ravi" //local variable //this name not accessible outside this block
        console.log("Hello "+name) //accessible only in outer function
    }
    //console.log("Hello "+name) //not accessible in outer function
    let name="John" //axcessble  outer function variable
    function innerFunction(){
        let name="Doe"
        console.log("Hello "+name) //acceable only in inner function
    }
    innerFunction()
}
outerFunction()
//closure is a function that has access to its own scope, the outer function's scope and the global scope