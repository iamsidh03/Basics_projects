//array
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros) //this method push dc_heroes in marvel_heroes array but push as a sepetate array
// o/p---> [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros)

// if we want too acess "flash" in the above array then how we can acess?
    //console.log(marvel_heros[3][1])

   const allHeros = marvel_heros.concat(dc_heros)
   /* The concat() method of Array instances is used to merge two or more arrays, not changes the old array but instead of that create new array */
   // console.log(allHeros)  

   const all_new_heros = [...marvel_heros, ...dc_heros]
   /* another way to merge two or more array */
   //console.log(all_new_heros)

   const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
   // console.log(another_array)

    /* flat() method in JavaScript,
     which is used to flatten nested arrays (i.e., convert multi-dimensional arrays into a single-dimensional array). */
     const flat_anotherArray= another_array.flat(Infinity);
     /*The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth */
     /*In this case, Infinity is passed as the argument, which means it will flatten arrays no matter how deeply nested they are */

     console.log(Array.isArray("siddharth"))
     /*isArray() method check that "siddharth" is array or not in this case it return false */
console.log(Array.from("Siddharth"))
/*The Array.from() method creates a new array instance from an iterable object. */
console.log(Array.from({name: "sddharth"}))
/**
 However, as explained before, Array.from({name: "siddharth"}) will still return an empty array [], because {name: "siddharth"} is neither an iterable nor an array-like object. It’s a plain object with one property name
 */