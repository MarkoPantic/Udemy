// // var obj = {
// //     name: 'Marko'
// // };

// // var stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);


// var personString = '{"name": "Marko","age": 24}';


// var personObj = JSON.parse(personString);

// console.log(personObj);
// console.log(personObj);

const fs = require('fs');


var originalNote = {
    title: 'Some title',
    body: 'Some body bla bla'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');


var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);