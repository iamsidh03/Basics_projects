// function square(n){
//     return n * n;
// }
// function cube(n){
//     return n * n * n;
// }
// function sumOfcubes(a,b){
//     const val1 = cube(a);
//     const val2 = cube(b);
//     return val1 + val2;
// }
// function sumOfSquares(a,b){
//     const val1= square(a);
//     const val2= square(b);
//     return val1 + val2
// }
// const ans =sumOfSquares(2,3);
// const ans_cube =sumOfcubes(2,3);
// // console.log(ans); // Output: 13
// // console.log(ans_cube); // Output: 35

// /*
// One  rule in programming is that Do not repeat yourself (DRY).
// In the above code, we have two functions that are very similar in nature.
// */

// // using callback function to avoid code repetition

// function sumofSomthing(a,b,fn){
//     const val1 = fn(a);
//     const val2 = fn(b);
//     return val1 + val2;
// }
// const ans_callback_sq =sumofSomthing(2,3,square); // 
// const ans_callback_cube=sumofSomthing(2,3,cube); // 

// console.log(ans_callback_sq); // Output: 13
// console.log(ans_callback_cube); // Output: 35
// //here,// fn is a callback function that can be passed to the sumofSomthing function

// //one more way to do 
// const ans_quad=sumofSomthing(20,30,function(n){
//     return n*n*n*n
// })
// console.log(ans_quad); // Output: 1600

// function sum(a,b){
//     console.log(a+b);
// }

// function calculate(a,b,callbacks){
//     callbacks(a,b);
// }
// calculate(1,2,sum); // Output: 3

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         let id=1;
//         console.log("data",dataId);
//         resolve("success",id);
//         id++;
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
// }
// This code demonstrates how to use callback functions to fetch data sequentially.

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5,()=>{
//                     console.log("All data fetched");
//                 });
//             });
//         });
//     })                               
// });
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             // let id=100;
//             console.log("data",dataId);
//             resolve("sucess");
//             // id++;
//             //reject=("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
// }

// //promise chaining
// let p1 =getData(1);
// p1.then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//         return getData(3);
//     });
// });

// getData(1).then((res) =>{
//     return getData(2);
// }).then((res) =>{
//     // console.log(res);
// }).then((res) =>{
//     return getData(3)
// }).then((res) =>{
//     console.log(res);
// });

// This code demonstrates how to use promises to fetch data sequentially.


/* let id=1
console.log("Fetching data ",id);
getData(1).then((res) =>{
    id++;
console.log("Fetching data ",id);
    return getData(2);
}).then((res) =>{
    // console.log(res);
   ++id;   
  console.log("Fetching data ",id);
}).then((res) =>{
    return getData(3)
}).then((res) =>{
    console.log(res);
}); */

// let promise =new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     reject("some error occured");
// });

// const getPromise=() =>{
//    return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         //resolve("Sucess");
//      reject("some error occured");
//     });
// };
// let promise =getPromise();
// promise.then((res) =>{
//     console.log("promise fullfilled",res);
// });
//  promise.catch((err)=>{
//     console.log("rejected promise",err);
//  });

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("I am an async function");
//             resolve("Async function resolved");
//         }, 4000); 
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("I am an async function 2");
//             resolve("Async function resolved done");
//         }, 5000); 
//     })
// }



// console.log("fetching data1....");
// let p1 =asyncFunc1();
// p1.then((res) =>{
    
//         console.log(res);
    
// });

// console.log("fetching data2....");
// let p2 =asyncFunc2();
// p1.then((res) =>{
   
//         console.log(res);
    
// });

//but we want that after fetching of data1 then data 2 will be fetched then only the data will be printed

// console.log("fetching data1...");
// let p1=asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2...");
//     let p2=asyncFunc2();
//     p2.then((res) =>{
//         console.log(res);
//     });
// });



/* 
async function hello(){
    console.log("hello world");
}
function api(){
    return new Promise((resolve,reject) =>{
       setTimeout(() =>{
        console.log("wether data is fetched or not");
        resolve(200);
    },2000);
});
}
 async function  getWeatherData() {
    await api(); //1st
    await api(); //2nd
 }
 getWeatherData();



 */


// async function 
function getData(dataId){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
/* 
console.log("Using async/await to fetch data sequentially...");
async function getAllData(){
    let id=1;
    console.log("getting data...",id++);
    await getData(1);
   
    console.log("getting data...",id++);
    await getData(2);
    
    console.log("getting data...",id++);
   
    await getData(3);
    
    console.log("getting data...",id++);
    
    await getData(4);
    
    console.log("getting data...",id++);
    await getData(5);
    
    console.log("getting data...",id++);
    await getData(6);
}
getAllData();
 */


/* 
console.log("Using promises to fetch data sequentially...");
//Promise Chain
console.log("getting data1...");
getData(1).then((res) =>{
    console.log("getting data2....");
    return getData(2);
}).then((res) =>{
    console.log("getting data3....");
    return getData(3);
}).then((res) =>{
    console.log(res);
});

 */


/* 
console.log("Using callback functions to fetch data sequentially...");
//callback hell
getData(1,() =>{
    console.log("getting data2...");
    getData(2,() =>{
        console.log("getting data3...");
        getData(3,() =>{
            console.log("getting data4...");
            getData(4,() =>{
                console.log("getting data5...");
                getData(5,() =>{
                    console.log("All data fetched");
                });
            });
        });
    });
})

 */

//IIFE FUNCTION
(async function getAllData(){
    let id=1;
    console.log("getting data...",id++);
    await getData(1);
   
    console.log("getting data...",id++);
    await getData(2);
    
    console.log("getting data...",id++);
   
    await getData(3);
    
    console.log("getting data...",id++);
    
    await getData(4);
    
    console.log("getting data...",id++);
    await getData(5);
    
    console.log("getting data...",id++);
    await getData(6);
})();