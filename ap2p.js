// // Import the express library
// const express = require('express');

// // Create an express app
// const app = express();

// // Define the port the server will run on
// const PORT = 3000;

// // Define a simple GET route
// app.get('/', (req, res) => {
//   res.send('Hello, World!'); // Send a plain text response
// });

// // Start the server and listen on the specified port
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

//same as 
const express=require('express')
const port =3000
const app=express()
app.get('/',function(req,res){
  res.send('hello world')
})
app.listen(port)

//create an todo app that lets users store todos on the server
