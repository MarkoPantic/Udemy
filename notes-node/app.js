console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0]


console.log('Yargs: ', argv);


console.log('comand: ', command);

if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);

    if(note){
        console.log(`New note added with title: ${note.title}`);
    } else {
        console.log('An error occured');
    }

} else if (command === 'list') {
    
    notes.getAll();

} else if (command === 'read') {
    
    notes.getNote(argv.title);

} else if (command === 'remove') {
    
    notes.removeNote(argv.title);
    
}else {
    console.log('Command not recognized');
}

