const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => expect(utils.add(33, 11)).toBe(44).toBeA('number'))


it('should square two numbers', () => {
    var res = utils.square(4);
    // if (res != 16) {
    //     throw new Error(`Expected 16 got ${res}`);

    
    // }

    expect(res).toBe(16).toBeA('number')
})

it('should expect same obj', () => expect({name: 'Andrew'}).toEqual({name: 'Andrew'}))

it('should have item in array', () => expect([1, 2, 3]).toInclude(1))

it('Has same properties', () => {
    expect({
        name: 'Marko',
        age: 24,
        school: 'kafana'
    }).toInclude({
        age: 24
    })
})


it('should verify first and last names are set', () => {
    var user = {
        location: 'Beograd',
        age: 24
    }
    var res = utils.setName(user, 'Marko Pantic');

    expect(res).toInclude({
        firstName: 'Marko',
        lastName: 'Pantic'
    })
})


it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
})


it('async squaring num', (done) => {
    utils.asyncSquare(2, (sq) => {
        expect(sq).toBe(4).toBeA('number');
        done();
    })
})