const request = require('request');

var encodedAdress = (address, callback) => {
    var encodedAdress = encodeURIComponent(address);


    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=AIzaSyCas8_v9g452MDlBf4FG9rfKsoO9ARM-Dg`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(`Unable to connect to Google servers`);
        } else if (body.status === 'ZERO_RESULTS') {
            callback(`Address not found`);
        } else if (body.status === 'OK') {

            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    })
}

module.exports = {
    encodedAdress
}
