
//import required modules
const TransactionDetail = require('./models/Transaction.models.js')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config(); //set the port for your server  


//for passing the path
var path = require('path');


//for posting the data from html pages to server using http
var http = require('http');
var bodyParser = require('body-parser');
var server = http.createServer(app);


//using the bodyParser
app.use(bodyParser.urlencoded({ extended: false }));




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
const connectDB = require("./db");
// const { log } = require("console");
connectDB();

//Define routes

//defining a route to render your index file (home page)

app.get('/', (req, res) => {
    //Render the html file using res.render()
    res.render('index');
});


//defining a route to send the home page form data to server
app.post("/api/signup", async (req, res) => {

    const { date, ...tdetails } = req.body;
    const result = await TransactionDetail.create(tdetails)
    console.log(result);
    res.send("SUCCEED")

    // console.log(tdetails); 
});

//Defining a route to render your html file


//Defining a route to get the data from database
app.get("/api/purchases", async (req, res) => {
    try {

        const response = await TransactionDetail.find();
        // console.log(response);
        // res.send(response);
        res.render("purchases",{
            details: response,
        });
    }
    catch (error) {
        console.log(error);
    }
});





//Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

