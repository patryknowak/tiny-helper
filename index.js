//Configuration file
var config = require('./config');

//Dependencies
var colors = require('colors');
var fs = require('fs');
var tinify = require('tinify');
tinify.key = config.userkey;

//Input directory
var dir = './img/';
//Output directory
var opt = './opt/';

var files = fs.readdirSync(dir);

// check if folder for optimilized files exist
// if not create one
fs.lstat(opt, function(err, stats){
	if(err) fs.mkdir('./opt');
})


// Loop through files
// send them to TinyPNG and receive new optimized files
files.forEach(function(item){
	tinify.fromFile(dir+item).toFile(opt+item, function(err){
		if (err) {
			console.log(colors.red("The error message is: " + err.message + " with file: "+item));
			return;
		}
		console.log(colors.green(item+' was optimized'));
	});
})
