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
// console.log(ages6)



