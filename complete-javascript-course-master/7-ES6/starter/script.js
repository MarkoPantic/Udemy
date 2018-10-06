// LET and CONST

//ES5

// var name5 = 'Jane Smith';
// var age5 = 23;
// name = 'Jane Miller';
// console.log(name);

// //ES6

// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller'
// console.log(name6);

//ES5
// function driversLicence(passedTest){
//     if(passedTest){
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//         console.log(firstName + ' born in ' + yearOfBirth);
//     }
// }

// driversLicence(true)

//ES6
// function driversLicence(passedTest){
//     if(passedTest){
//         let firstName = 'John';
//         const yearOfBirth = 1990;
//         console.log(firstName + ' born in ' + yearOfBirth);
//     }

    
// }

// driversLicence(true)



// {
//     let a = 1;
//     const b = 2;

// }

// console.log(a + b);



// let firstName = 'john';

// let lastName = 'Smith';

// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2018 - year;
// }


// // console.log('this is ' + lastName)


// console.log(`This is ${firstName} he was born in ${yearOfBirth} and today he is ${calcAge(yearOfBirth)}`);


// const n = `${firstName} ${lastName}`

// console.log(n.startsWith('j'))

// const years = [1990, 1991, 1992, 1993];

// let ages6 = years.map(el => 2016 - el);



// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`)


// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element is ${index + 1}: ${age}`
// })
// console.log(ages6);


// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', () => {
//             let str = `This is a box number ${this.position} and it is ${this.color}`;

//             alert(str)
//         })
//     }
// }
// box6.clickMe();

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function (friends) {
//     var arr = friends.map(function (el) {
//         return this.name + ' is friends ' + el;
//     }.bind(this));

//     console.log(arr);
// }


// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends)



// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function (friends) {
//     let arr = friends.map((el) => `${this.name} is freinds with ${el}`
//     );

//     console.log(arr);
// }


// const friends = ['Bob', 'Jane', 'Mark'];

// new Person('John').myFriends5(friends)







// const [name, age] = ['john', 26];


// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// }


// const {firstName, lastName} = obj


// // console.log(firstName, lastName);



// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1992);

// console.log(age, retirement);


// const boxes = document.querySelectorAll('.box');



// const boxesArray6 = Array.from(boxes);

// boxesArray6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// for(const cur of boxesArray6){

//     cur.className.includes('blue') ? true : cur.textContent = 'I changed to blue pozz'
   
// }


// const ages = [12, 19, 8 ,21, 14, 18]


// console.log(ages.findIndex(cur => cur >= 18));

// console.log(ages.find(cur => cur >= 18));


// function addFourAges(a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 17, 16, 15)

// console.log(sum1);
// const arr = [18, 17, 16, 15]


// const max3 = addFourAges(...arr);

// console.log(max3);





// const familySmith = ['John', 'Jane', 'Mark'];

// const familyMiller = ['Ann', 'Marry', 'Bob'];

// const bigFamily = [...familySmith, ...familyMiller];

// console.log(bigFamily);


// const h = document.querySelector('h1');

// const boxes = document.querySelectorAll('.box');


// const all = [h, ...boxes];

// all.forEach(cur => cur.style.color = 'purple')

// console.log(all);




// function isFullAge() {
//     var arr = Array.from(arguments).map(cur => 2018 - cur);
//     console.log(arr);
// }

// isFullAge(18, 1990, 1995, 2005)


// function isFullAge(limit, ...years) {
//     years.forEach(cur => console.log((2018 - cur) >= limit))
// }


// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality === undefined ? nationality = 'serbian' : nationality;
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'serbian') {
//         this.firstName = firstName;
//         this.yearOfBirth = yearOfBirth;
//         this.lastName = lastName;
//         this.nationality = nationality;
// }



// var john = new SmithPerson('john', 1990);
// var emily = new SmithPerson('john', 1993, 'diaz');

// console.log(emily);

// console.log(john);


// const question = new Map();

// question.set('question', 'What is the oficial name of the latest major js version');



// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer');
// question.set(false, 'Wrong please try again');

// console.log(question.get('question'));

// // question.forEach((value, key) => console.log(`This is ${key} and its set to ${value}`))

// for(let [key,value] of question.entries()){
//     // console.log(`This is a key ${key} and this is value ${value}`);

//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key}: ${value}`)
//     }
// }


// const answer = parseInt(prompt('The answer is?'));

// console.log(question.get(question.get('correct') === answer));


// class Person {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         console.log(new Date().getFullYear() - this.yearOfBirth);
//     }

// }

// const john = new Person('john', 1990, 'teacher');

// console.log(john);

// class Athlete extends Person {
//     constructor (name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }


//     wonMedal(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete = new Athlete('john', 1990, 'swimmer', 3, 10);

// johnAthlete.wonMedal();
// johnAthlete.calculateAge();
// console.log(johnAthlete);





// class Element  {
//     constructor (name, buildYear) {
//         this.name = name;
//         this.buildYear = buildYear;
//     }


// }


// class Park extends Element{
//     constructor(name, buildYear, area, numTrees) {
//         super(name, buildYear);
//         this.area = area; // km^2
//         this.numTrees = numTrees;
//     }

//     treeDensity(){
//         const density = this.numTrees / this.area;
//         console.log(`${this.name} has a density of ${density} trees per square km`);
//     }

// }

// class Street extends Element {
//     constructor(name, buildYear, length, size = 3){
//         super(name, buildYear);
//         this.length = length;
//         this.size = size;
//     }

//     classifyStreet () {
//         const classification = new Map();
//         classification.set(1, 'tiny')
//         classification.set(2, 'small')
//         classification.set(3, 'normal')
//         classification.set(4, 'big')
//         classification.set(5, 'hude');
//         console.log(`${this.name}, build in ${this.buildYear}, is pretty ${classification.get(this.size)}`);
//     }

// }

// function calcAvg(arr) {
    
//     return arr.reduce((prev, cur) => prev + cur, 0) / arr.length

// }


// const allParks = [
//     new Park('Veliki park', 1850, 0.2, 215),
//     new Park('Mali park', 1960, 2.9, 3541),
//     new Park('bla park', 1911, 4.2, 5500)
// ]

// const allStreets = [
//     new Street('Zrmanjska', 1999, 1.1, 4),
//     new Street('Kneza Milosa', 1800, 9.9, 5),
//     new Street('Visoka', 1999, 0.1, 1),
//     new Street('Pozeska', 1879, 5, 4)
// ]


// function reportParks(p) {

//     console.log('-------PARKS REPORT--------');

//     //density

//     p.forEach(element => element.treeDensity());
    
//     //Average age
//     const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    
//     console.log(`Our ${p.length} parks have an average od ${calcAvg(ages)} years. pozz`);

//     p.map(el => el.numTrees >= 1000).forEach((el, index) => el ? console.log(`Parks ${p[index].name} have more then 1000 trees`) : console.log('No parks have more then 1000 trees'))


// }

// function reportStreets(s) {
    
//     console.log('-------STREETS REPORT--------');

//     const ages = s.map(el => new Date().getFullYear() - el.buildYear);

//     console.log(`Our ${s.length} streets have an average od ${calcAvg(ages)} years. pozz`);

//     s.forEach(el => el.classifyStreet())

// }


// reportParks(allParks)
// reportStreets(allStreets)