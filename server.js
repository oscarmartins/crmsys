const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
require("date-format-lite");//enable date conversion helpers
const helmet = require("helmet");

/**connect to the MySQL* 
var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'sampleDB',
  password : 'sampleDB',
  database : 'sampleDB'
});
**/

const port = process.env.PORT || 4600;
const routes = require('./api/routes');

var app = express();
app.use(helmet());
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});
app.listen(port, (req, res) => {
    console.log(`running on port ${port}`);
}); 