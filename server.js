const express = require('express');
const app = express();
const port = 8080;
require('newrelic');
const UserModel = require("./models/user");
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://Blain:deadlyZ31@cluster0.dlimqkn.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static',express.static('resources'));
// use res.render to load up an ejs view file

//Create a body parsing middleware with the built in express body-parser in order to populate the req.body with our inputs

app.use(express.urlencoded({extended: true}))

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/services', function(req, res) {
  res.render('pages/services');
});

// about page
app.get('/bio', function(req, res) {
  res.render('pages/bio');
});
// portfolio page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
  });
  

app.listen(port);
console.log(`Server is listening on port ${port}`);
