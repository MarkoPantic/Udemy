const request = require('supertest');
const expect = require('expect');
var app = require('./server').app


it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found'
            })
        })
        .expect(404)
        .end(done)
})




it('should have user', (done) => {
    request(app)
        .get('/user')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                ime: 'Marko',
                prezime: 'Pantic'
            })
        })
        .end(done)
})

