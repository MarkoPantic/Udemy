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
function driversLicence(passedTest){
    if(passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;
        console.log(firstName + ' born in ' + yearOfBirth);
    }

    
}

driversLicence(true)


