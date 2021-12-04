export function callbackFetchData(url_api, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                callback(new Error("Error"), null);
            }
        }
    };
    xhttp.send();
}

// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// function callbackFetchData(url_api, callback) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open('GET', url_api, true);
//     xhttp.onreadystatechange = function(event) {
//         if (xhttp.readyState === 4) {
//             if (xhttp.status === 200) {
//                 callback(null, JSON.parse(xhttp.responseText))
//             } else {
//                 const error = new Error('Error: ' + url_api);
//                 return callback(error, null)
//             }
//         }
//     }
//     xhttp.send();
// }

// module.exports = callbackFetchData;