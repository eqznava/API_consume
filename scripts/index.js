import { callbackFetchData } from "./callbackFetchData.js";
// const API = 'https://ffxivcollect.com/api/minions/';
// const API = 'https://ffxivcollect.com/api/minions?name_en_start=Nagxian Cat';
const API = 'https://ffxivcollect.com/api/minions?limit=30';
// const API = 'https://ffxivcollect.com/api/minions?id_in=9,25,31,17,14,23';

function buildCard(minions) {
    const card = document.createElement('article');
    card.innerHTML = `<h1>${minions.name}</h1>
                            <h2>${minions.race.name}</h2>
                            <img src="${minions.image}" alt="${minions.name}">
                            <p>${minions.tooltip}</p>`;
    return card;
}

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

const callbackContainer = document.getElementById('card-container');

callbackFetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    data1.results.map(minions => {
        const card = buildCard(minions);
        callbackContainer.appendChild(card);
    });
});