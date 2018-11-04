
const _ = require('lodash');
const fs = require("fs");
const Crypto = require('crypto-js');


const readNotes = () => {
	return  new Promise((resolve,reject)=>{
		try{
			const notes = fs.readFileSync('notes-store.json');
			resolve(JSON.parse(notes));
		} catch (e) {
			console.log("Error reading file! ",e);
			reject(e);
		}
	});
}

const getNote = (title) => {
	readNotes()
	.then(notes=>{
		const key = createIndex(title); 
		const note = notes[key]; 
		if(note){
			console.log('Title '+note.title);
			console.log('Body '+note.body);
		} else { console.log('Not found.');} 
	})
	.catch(e=>{console.log("Error reading file! ",e);});
}


const createIndex = (title) => {
	return Crypto.MD5(title).toString();
}

const addNote = (title, body) => {
	
	var notes = {};
	readNotes()
	.then( res =>{
		notes = res; 
		// console.log("Reading success"+ notes);
		const note = {title, body};
		const key = createIndex(title);
		console.log(key);
		notes[key] = note;
		saveNotes(notes);
	})
	.catch(e=>{
		console.log("Error!",e);
	});

	
}

const saveNotes = (notes) => {
	
	try{
		fs.writeFileSync('notes-store.json',  JSON.stringify(notes));
		console.log("Saved");
	} catch (e) {
		console.log("Not saved");
	}
}

const removeNote = title => {
	var notes = {};
	readNotes()
	.then( res =>{
		notes = res; 
		console.log(notes);
		
		const key = createIndex(title);
		console.log(key);
		if(notes.key != 'undefined'){
			delete notes[key]; 
			console.log(notes);
			saveNotes(notes);

		} else {
			console.log("Note not found!");
		}
	})
	.catch(e=>{});
	
}

const listAll = () => {
	readNotes()
	.then(notes=> {
		console.log('Available saved notes \n -------------');
		var i = 1;
		for (let key in notes){
			console.log(i+'\t Title : '+notes[key].title);
			console.log('\t  Body : '+notes[key].body);
			i += 1;
		}
	})
	.catch(e=>{
		console.log("Error fetching notes");
	});
}

module.exports = { addNote , readNotes, removeNote, listAll, getNote };



var square = (x) => {
	var result = x*x;
	return result;
}

var square = (x) => x*x;

var square = x => x*x;

