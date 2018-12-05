const yargs = require('yargs');
const axios = require('axios');
const apiKey = '0cc58969a9e3da7b60f8e2782b1e9329'

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'adress',
            describe: 'Adress to fetch weather form',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;



var encodedAdress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=AIzaSyCas8_v9g452MDlBf4FG9rfKsoO9ARM-Dg`;


axios.get(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address')            
        }

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lat;
        console.log(lat, lng);
        var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
        console.log(`Requested address: ${response.data.results[0].formatted_address}`);
        return axios.get(weatherUrl)
    })
    .then((response) => {
        var temp = response.data.currently.temperature;
        var apparenttemp = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temp} and it feels like ${apparenttemp}`);
    })
    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers');
        } else {
            console.log(e.message);
        }
    }) 