const argv = require('yargs').argv;
let request = require('request');
let apiKey = '2e73fcbc7ecf5ec8f90502aad41a1551';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`

request(url, function(err,response,body){

if(err){
console.log("error: ",err);
} else {
    let weather = JSON.parse(body);
    let message =`It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
}

});
