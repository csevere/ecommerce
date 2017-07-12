var express = require('express');
var router = express.Router();
var mysql = require('mysql');
//Include config file. Go up from routes, down into config, config.js

var config = require('../config/config');

var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
}) 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
