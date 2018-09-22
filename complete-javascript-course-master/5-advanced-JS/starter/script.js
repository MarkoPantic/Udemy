var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var john = new Person('john', 1990, 'developer');
var mark = new Person('Mark', 1948, 'retired');


Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'


john.calculateAge();


console.log(john.lastName)
console.log(mark);
var arr = [1, 2, 3];

Array.prototype.clgFirst = function () {
    console.log(this[0]);
}


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

// function interviewQuestion(job) {
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if(job === 'teacher'){
//         return function (name) {
//             console.log('What subject do you teach? ' + name);
//         }
//     } else {
//         return function (name) {
//             console.log('Hello ' + name + ' what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');

// teacherQuestion('Mark')

// var designerQuestion = interviewQuestion('designer');

// designerQuestion('John');

// interviewQuestion('nista')('jane')


// IIFE

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function (goodLuck){
//         var score = Math.random() * 10;
//         console.log(goodLuck)
// })(5);


/************************************
 * CLOSURES
 */

//  function retirement(retirementAge) {
//      var a = " years left until retirement"
//     return function (yearOfBirth) {
//         var age  = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
//  }

// var retirementUS = retirement(66);
// var retirementEU = retirement(65);
// var retirementAsia = retirement(68);

// retirementUS(1990);
// retirementEU(1990);
// retirementAsia(1990);


// function interviewQuestions(job) {
//     var a = ' you do ';
//     return function (name) {
//         console.log(name + a + job);
//     }
// }

// var interviewQuestionsTeacher = interviewQuestions('teaching');
// var interviewQuestionsDesigner = interviewQuestions('designing');
// var interviewQuestionsDeveloper = interviewQuestions('developing');

// interviewQuestionsDesigner('Ivana');
// interviewQuestionsTeacher('mala goca');
// interviewQuestionsDeveloper('bokula')

/****************************
 * bind call apply
 * MORONSKI
 */

//  var john = {
//      name: 'John',
//      age: 26,
//      job: 'teacher',
//      presentation: function (style, timeOfDay) {
//          if(style === 'formal'){
//              console.log('Good ' + timeOfDay + ', ladies and gentelman! I\'m ' + this.name + ' and I\'m ' + this.age + ' old');
//          } else if(style === 'friendly'){
//              console.log('Hey what\'s up? I\'m  ' + this.name + ', ladies and gentelman! I\'m ' + this.job + ' and I\'m ' + this.age + ' old. Have a nice ' + timeOfDay);         }
//      }
//  }


//  var emily = {
//      name: 'Emily',
//      age: 35,
//      job: 'designer'
//  }

//  john.presentation('formal', 'morning');


//  john.presentation.call(emily, 'friendly', 'afternoon')

// //john.presentation.apply(emily, ['friendly', 'afternoon'])

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning')
// johnFriendly('night')


/***************************************
 * CODING CHALLENGE  7
 */

(function () {


    function Question(question, answers, answer) {
        this.question = question;
        this.answers = answers;
        this.answer = answer;
        this.checkAnswer = function () {
            if (this.answer == this.input) {
                console.log('Tacan odgovor! Skor: ');
                
                
            } else {
                console.log('Netacan odgovor!');
            }
            skor(this.answer == this.input);
            newQuestion()
        }
    }
    

    Question.prototype.random = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + '. ' + this.answers[i]);
        };
    }


    
    var question1 = new Question('Koliko je Lemi visok', [160, 170, 195], 2);
    var question2 = new Question('Da li je ovo zanimljivo', ['Da', 'Ne', 'Mozda'], 1);
    var question3 = new Question('Koji sok najvise volite da pijete', ['vinjak', 'vodka', 'pivo'], 0);
    
    var arr = [question1, question2, question3];

    function score() {
        var score = 0;
        return function (bol) {
            if(bol){
                score++;
            }
            console.log(score);
        }
    }
    var skor = score();
    




    function newQuestion() {
        var randomBroj = Math.floor(Math.random() * arr.length);

        arr[randomBroj].random()


        arr[randomBroj].input = prompt('Unesite tacan odgovor?');

        if (arr[randomBroj].input === 'quit') {
            return
        }

        arr[randomBroj].checkAnswer();
    }

    newQuestion()
})()