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

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'serbian') {
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
        this.lastName = lastName;
        this.nationality = nationality;
}



var john = new SmithPerson('john', 1990);
var emily = new SmithPerson('john', 1993, 'diaz');

console.log(emily);

console.log(john);