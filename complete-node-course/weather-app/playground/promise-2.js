const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAdress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}&key=AIzaSyCas8_v9g452MDlBf4FG9rfKsoO9ARM-Dg`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject(`Unable to connect to Google servers`);
            } else if (body.status === 'ZERO_RESULTS') {
                reject(`Address not found`);
            } else if (body.status === 'OK') {

                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        })
    })
};


geocodeAddress('zrmanjska 20')
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err);
    });