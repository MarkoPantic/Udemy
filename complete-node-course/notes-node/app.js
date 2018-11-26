const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
};

    

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Listing all notes')
    .command('read', 'Reading a single note', {
        title: titleOptions
    })
    .command('remove', 'Removing a note', {
        title: titleOptions
    })
    .help()
    .argv;


var command = argv._[0]



if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);

    if(note){
        notes.logNote(note)
    } else {
        console.log('An error occured');
    }

} else if (command === 'list') {
    
    var allNotes = notes.getAll();
    if (allNotes.length >= 1) {
        console.log(`Printing ${allNotes.length} note(s)`);
        allNotes.forEach(note => notes.logNote(note));
    } else {
        console.log('No notes found');
    }

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
    
} else {
    console.log('Command not recognized');
}

