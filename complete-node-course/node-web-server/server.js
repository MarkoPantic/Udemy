const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamIt', (text) => text.toUpperCase())

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        title: 'Some website',
        welcomeMessage: 'Welcome all new morons'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        title: 'Some website'
    });
})


app.get('/bad', (req, res) => {
    res.send({
        error: 'Unable to bla bla'
    })
})

app.listen(8000, () => {
    console.log('Server is up on port 8000');
});
