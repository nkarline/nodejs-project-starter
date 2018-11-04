import { listeners } from 'cluster';


const _ = require('lodash');
const fs = require("fs");
const notes = require("./notes.js");
const yargs = require('yargs');

var command = process.argv[2];
const argv = yargs.argv;

console.log("Command", command);

console.log("yargs",argv);

switch(command){
	case "list":
		console.log("Listing all notes");
		notes.listAll();
		break;
	case "getNote":
		notes.getNote(argv.title);
		break;
	case "add":
		console.log("Adding new note");
		notes.addNote(argv.title, argv.body);
		break;
	case "remove":
		console.log("Removing note");
		notes.removeNote(argv.title);
		break;
	default: 
		return ;
}


var user = {
	name: 'Tom',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	},
	sayHiAlt(){
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	}
}

user.sayHi();
user.sayHiAlt(1,2,"xender");



console.log("Starting");
setTimeout(()=>{						// call this inside function after 2s
	console.log("First timeout Inside callback");
},2000);
setTimeout(()=>{						// call this inside function after 2s
	console.log("Second timout Inside callback");
},0);
console.log("Finishing");


output: 

	starting
	Finishing
	Second timeout Inside callback <-  indicates non-blocking nature, print console log after 0 ms without blocking folloeing code/listeners
	First timeout Inside callback  <- executed after 2s without blocking


	var a = addSurname( "Will", function(fullname) {
		console.log(fullname);
	}) ;

	var addSurname = function(name, callback){
		var surname = ' Smith';
		var fullname = name + surname;
		callback(fullname);
	}


	