const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const randomNumber = require('../utils/randomNum');
const API = 'https://ffxivcollect.com/api/minions/';

function fetchData(url_api, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error: ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

fetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[randomNumber(0, 407)].id, function(error2, data2) {
        if (error2) return console.error(error2);
        console.log(data2.name);
        console.log(data2.race.name);
        console.log(data2.image);
        console.log(data2.description);
    })
})