console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0]



console.log('comand: ', command);

if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);

    if(note){
        notes.logNote(note)
    } else {
        console.log('An error occured');
    }

} else if (command === 'list') {
    
    notes.getAll();

} else if (command === 'read') {
    
    var note = notes.getNote(argv.title);

    if (note) {
        notes.logNote(note)
    } else {
        console.log(`Requested note doesn't exist`);
    }

} else if (command === 'remove') {
    
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Note with the title ${argv.title} removed` : `Note with ${argv.title} title doesn't exist`;

    console.log(message);
    
}else {
    console.log('Command not recognized');
}

