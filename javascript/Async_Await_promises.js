// function findsum(n){
//     let a=0;
//     for(let i=0;i<n;i++){
//         a+=i;
// }
//  return a;
// }
//     function findSumTill100(){
//         //return findsum(100);
//     console.log(findsum(100));
//     }




// setTimeout(findSumTill100,1000)
// console.log("hello world");

// /*
// what is accutually happining is first hello will be printed then after 4090 will be printed but why

// because setTimeout is a macrotask  

// macrotask is a task that is executed after a certain time interval
// here, setTimeout makesure that findSumTill100 will waill for 1000ms 
// */



// const fs = require('fs');

// fs.readFile('a.txt', 'utf-8', function(err, data) {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(data);
// });

// console.log("hello world");
// // The above code reads a file named 'a.txt' asynchronously and prints its content.

const fs = require('fs');

function rajReadFile() {
    return new Promise(function(resolve, reject) {
        fs.readFile('a.txt', 'utf-8', function(err, data) {
            if (err) {
                reject(err); // always handle errors
            } else {
                resolve(data);
            }
        });
    });
}

function onDone(data) {
    console.log(data);
}

rajReadFile().then(onDone).catch(console.error); // catch errors too
