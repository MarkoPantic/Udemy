// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this. yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// var john = new Person('john', 1990, 'developer');
// var mark = new Person('Mark', 1948, 'retired');


// Person.prototype.calculateAge = function () {
//     console.log(2018 - this.yearOfBirth)
// }

// Person.prototype.lastName = 'Smith'


// john.calculateAge();


// console.log(john.lastName)
// console.log(mark);
// var arr = [1, 2, 3];

// Array.prototype.clgFirst = function () {
//     console.log(this[0]);
// }


/**
 * Object.create
 */

//  var personProto = {
//      calculateAge: function () {
//          console.log(2018 - this.yearOfBirth);
//      }
//  }


//  var john = Object.create(personProto);

//  john.name = 'John';
//  john.yearOfBirth = 1990;
//  john.job = 'developer';


//  var jane = Object.create(personProto, {
//      name: {value: 'Jane'},
//      yearOfBirth: {value: 1980},
//      job: {value: 'designer'}
//  })

//  console.log(jane)

// Primitives
var a = 23;
var b = a;
a = 46;

//Objects
var obj1 = {
    name: 'John',
    age: 26
}

var obj2 = obj1;

obj1.age = 30;
//Functions



var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisabon'
}

function change(a, b) {
    a = 30;
    b.city = 'Beograd'
}

change(age, obj);

console.log(age);
console.log(obj);