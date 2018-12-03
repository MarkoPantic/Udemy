const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const yargs = require('yargs');

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

geocode.encodedAdress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
            if (error) {
                console.log(error);
            } else {
                console.log(weatherResults);
            }
        });
    }
})




