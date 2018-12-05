var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject('You must enter a number')
            }
        }, 1500);
    })
}


// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         //resolve('Hey. It worked')
//         reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Succsess: ' + message);
// }, (errorMessage) => {
//     console.log('Rejected: ' + errorMessage);
// })



asyncAdd(2, 5)
    .then((res) => asyncAdd(res, 33))
    .then(res => console.log(res))
    .catch((err) => console.log(err))