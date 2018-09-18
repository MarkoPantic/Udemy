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
// var a = 23;
// var b = a;
// a = 46;

// //Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// }

// var obj2 = obj1;

// obj1.age = 30;
// //Functions



// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisabon'
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'Beograd'
// }

// change(age, obj);

// console.log(age);
// console.log(obj);


//Functions

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el){
//     return 2018 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// var ages = arrayCalc(years, calculateAge);

// var fullAges = arrayCalc(ages, isFullAge);

// console.log(fullAges);


// function maxHR(el) {

//     if (el >= 18 && el <= 81) {

//     return Math.round(206.9 - (0.67 * el));;

//     } else {
//         return -1
//     }

// }

// var hr = arrayCalc(ages, maxHR)

// console.log(hr)

//Functions returning functions

function interviewQuestion(job) {
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function (name) {
            console.log('What subject do you teach? ' + name);
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Mark')