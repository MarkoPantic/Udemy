const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const maintenance = false;
const port = process.env.PORT || 8000;

var app = express();


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
})

app.use((req, res, next) => {
    if (maintenance) {

        res.render('maintenance.hbs', {
            title: 'We will be right back',
            body: 'See you soon!! pozz'
        })
    } else {
        next();
    }
})

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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
