//const fb=new Object()
const fb={}
fb.id="23244";
fb.name="sunny"
fb.isLoggedIn=false
//console.log(fb)

const regularUser={
        email:"Sidhharth.com",
        fullname:{
            userfullName:"Siddharth",
            lastName:"Raj"
        }
}
//console.log(regularUser.fullname)
//console.log(regularUser.fullname?.userfullName.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
const obj4={5:"a",6:"b"}
//console.log(obj3)

//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
//console.log(obj3);
const users=[
    {
        id:1,
        email:"Raj@gmail.com"
    }
]
users[1].email
// console.log(fb)
// console.log(Object.key(fb))
// console.log(Object.values(fb))
// console.log(Object.entries(fb))


// console.log(fb.hasOwnProperty('isLoggedUser'));
// console.log(fb.hasOwnProperty('isLogged'));

const course={
    courseName:"chat gpt",
    price:"999",
    courseInstructor:"Siddhart"
}

//couese.courseInstructor

const {courseInstructor:instructor}=course
console.log(courseInstructor)
console.log(instructor)

const navbar =({company})=>{

}
navbar(company="hitesh")

// {
// "name":"siddharth",
// "coursename":"videoEditing",
// "price":"free"
// }
//
//