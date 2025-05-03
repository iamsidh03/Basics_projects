const arr=[1,3,4,5,567,880];

for(const num of arr){
   // console.log(num)
}

//Maps 
/*
Map Initialization and Usage:
A Map is created using the new Map() constructor.
Key-value pairs are added to the map using the set(key, value) method.
The key-value pairs represent country codes and their corresponding country names.
Note that the key 'IN' is overwritten with the value "India". */

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 //console.log(map);

for (const [key, value] of map) {
     //console.log(key, ':-', value);
}

/*
const myGame ={
    game1:'bgmi',
    game2:'mario'
}
for(const [key,value] of myGame){
    console.log(key,':-',value)
}
*/
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] in myObject) {
     //console.log(key, ':-', value);
    
 }

 const Object = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in Object)
{
    console.log(`${key} shortcut key is for ${Object[key]}`);
}


const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach(function (val){
   // console.log(val);
})

coding.forEach((item) =>{
   // console.log(item);
})

function printme(item){
    console.log(item);
}
coding.forEach(printme);