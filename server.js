	
					  require('dotenv').config();
const express		= require('express'),
	server			= express(),
	path			= require('path'),
	dotenv			= require('dotenv'),
	chalk			= require('chalk'),
	ENV				= require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
					  require(path.resolve('./config/lib/required'))(server);


server.listen(ENV.PORT, function () {
	console.log(chalk`{green Node Js server running on {green.bold ${ENV.PORT}} port at {green.bold ${ENV.MODE_TYPE}}..}`)
});	