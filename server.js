const express = require('express');
require('newrelic');
const app = express();
const port = 8080;

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
