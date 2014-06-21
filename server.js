// modules =================================================
var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var app = express();
// configuration ===========================================
	
// config files
var db = require('./config/db');
mongoose.connect(db.url);

var port = process.env.PORT || 8080; // set our port

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);

console.log('Magic happens on port ' + port); 			// shoutout to the user

exports = module.exports = app; 						// expose app