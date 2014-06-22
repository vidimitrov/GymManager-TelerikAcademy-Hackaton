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
mongoose.connect(db.local);

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function callback(){
   console.log('DB connection opened!');
});

var port = process.env.PORT || 8080;

app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes ==================================================
require('./app/routes')(app);

// start app ===============================================
app.listen(port);

console.log('Magic happens on port ' + port);

exports = module.exports = app;