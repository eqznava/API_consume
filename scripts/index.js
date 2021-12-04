import { callbackFetchData } from "./callbackFetchData.js";
import { buildCard } from "./buildCard.js";
import { fetchData } from "./fetchData.js";
// const API = 'https://ffxivcollect.com/api/minions/';
// const API = 'https://ffxivcollect.com/api/minions?name_en_start=Nagxian Cat';
// const API = 'https://ffxivcollect.com/api/minions?id_in=9,25,31,17,14,23';
const API = 'https://ffxivcollect.com/api/minions?limit=30';
const API_PROMISE = 'https://ffxivcollect.com/api/minions?id_in=31...60';
const API_ASYNC = 'https://ffxivcollect.com/api/minions?id_in=61...90';

const callbackContainer = document.getElementById('card-container1');
const promiseContainer = document.getElementById('card-container2');
const asyncContainer = document.getElementById('card-container3');

//Callback
callbackFetchData(API, function(error1, data1) {
    if (error1) return console.error(error1);
    data1.results.map(minions => {
        const card = buildCard(minions);
        callbackContainer.appendChild(card);
    });
});

// Promises
fetchData(API_PROMISE)
    .then(data1 => {
        data1.results.map(minions => {
            const card = buildCard(minions);
            promiseContainer.appendChild(card);
        });
    })
    .catch(error => {
        return error;
    });

// Async / Await
(async function fetchDataAsync() {
    const data1 = await fetchData(API_ASYNC);

    data1.results.map(minions => {
        const card = buildCard(minions);
        asyncContainer.appendChild(card);
    });
})();