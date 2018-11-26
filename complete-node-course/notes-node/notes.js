const fs = require('fs');


var fetchNotes = () => {


     try {

         var notesString = fs.readFileSync('notes-data.json');
         return JSON.parse(notesString);

     } catch (error) {

         return [];

     }


}

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}



var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter(el => el.title === title);

    if (duplicateNotes.length === 0) {

        notes.push(note);
        saveNotes(notes);
        return note
    } else {
        console.log('Uneli ste isti title');
    }


};

var getAll = () => {
    
 return fetchNotes()

};

var getNote = (title) => {

    var notes = fetchNotes();

    var noteToReturn = notes.filter(note => note.title === title);

    return noteToReturn[0];

}

var removeNote = (title) => {

    var notes = fetchNotes();

    var filteredNotes = notes.filter(note => note.title != title);

    saveNotes(filteredNotes);
    
    return notes.length != filteredNotes.length
}


var logNote = (note) => {
    console.log(`You requested note with title ${note.title} and it's body is ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
