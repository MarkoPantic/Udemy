console.log('Starting notes.js');
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
    


};

var getNote = (title) => {

    console.log('This is a title: ', title);

}

var removeNote = (title) => {

    console.log('Removing the title: ', title);

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
