
//import required modules
const express = require('express');
const app = express(); 
const PORT = process.env.PORT || 3000; //set the port for your server  


//for passing the path
var path = require('path');




//Set EJS as the view engine
app.set('view engine', 'ejs');


//Serve static files from the public directory
app.use(express.static("public"));


//render the ejs views
app.set("views", path.join(__dirname, "views"));

//Middleware for parsing JSON data
app.use(express.json());

//Define routes
app.get('/hello', (req,res) => {
    res.send('Hello World');
});

//Defining a route to render your html file

app.get('/', (req,res) => {
    //Render the html file using res.render()
    res.render('index');
});

//Defining a route to render your html file
 //Start server
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});

