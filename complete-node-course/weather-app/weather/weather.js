const request = require('request');

const yargs = require('yargs');


const apiKey = '0cc58969a9e3da7b60f8e2782b1e9329'

var fToC = (tF) => (tF - 32) * 5 / 9; 


var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: fToC(body.currently.temperature),
                apparentTemperature: fToC(body.currently.apparentTemperature)
            });
        } else {
            callback(`Unable to fetch weather`);
        }
    })
}

module.exports = {
    getWeather
}