const express = require('express');
//require('newrelic');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://Blain:deadlyZ31@cluster0.dlimqkn.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static',express.static('resources'));
// use res.render to load up an ejs view file

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
