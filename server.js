
//import required modules
const express = require('express');
const app = express(); 
const PORT = process.env.PORT || 3000; //set the port for your server  


//for passing the path
var path = require('path');


//for posting the data from html pages to server
var http = require('http');
var bodyParser = require('body-parser');
var server = http.createServer(app);


//using the bodyParser
app.use(bodyParser.urlencoded({ extended : false }));




//Set EJS as the view engine
app.set('view engine', 'ejs');


//Serve static files from the public directory
app.use(express.static("public"));


//render the ejs views
app.set("views", path.join(__dirname, "views"));

//Middleware for parsing JSON data
app.use(express.json());

//Making the models of database


//Connecting the database
const ConnectDB = require("./db");
const { log } = require("console");
ConnectDB();

//Define routes

//defining a route to render your index file (home page)

app.get('/', (req,res) => {
    //Render the html file using res.render()
    res.render('index');
});


//defining a route to send the home page form data to server
app.post ("/api/signup", (req, res) => {

    const { millName, storeName, item, price, quantity, date } = req.body;

    console.log(req.body);


    res.send("Hello Gays");
    });

//Defining a route to render your html file
 //Start server
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});

