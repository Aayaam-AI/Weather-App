const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5b4b4e78f5fda02a86ec8f202db52225&query=${encodeURIComponent(lat)},${encodeURIComponent(long)}`;
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to weather service!', undefined);
        }
        else if(response.body.error){
            callback('Unable to find location', undefined);
        }
        else{
            callback(undefined, 'Temperature: ' + response.body.current.temperature + ' C');
        }
    });
};

module.exports = forecast;