const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWF5YWFtIiwiYSI6ImNremt6bmpxZDB2dGkycGtlZ3Y5bTlyczAifQ.q7WR-vjAHeHN8OQSqS-sPQ&limit=1`;

    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services!', undefined);
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location', undefined);
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;