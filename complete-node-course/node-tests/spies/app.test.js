const expect = require('expect');
const rewire = require('rewire');


var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    // it('Should call the spy correctly', () => {
    //     var spy = expect.createSpy();
    //     spy('Marko', 24);
    //     expect(spy).toHaveBeenCalledWith('Marko', 24);
    // })

    it('Should call saveUser with user obj', () => {
        var email = 'marko@gmail.com';
        var password = 123456;

        app.handleSingup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        })
    })
})