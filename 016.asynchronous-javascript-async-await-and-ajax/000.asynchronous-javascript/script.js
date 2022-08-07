'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Helper function to render country
const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}


// 002.first-ajax-call-xmlhttprequest
// XML HTTP Request
const getCountryData = function (country) {
    let request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        renderCountry(data);
    });
}

// Uncomment to run 002.first-ajax-call-xmlhttprequest
// getCountryData('portugal');
// getCountryData('ireland');


// 004.callback-hell
const getCountryAndNeighbourData = function (country) {

    // AJAX call country 1
    let request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data);

        // Get neighbour country 2
        let [neighbour] = data.borders;

        if(!neighbour) return;

        let request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function (response) {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    });
}
// Uncomment to run 004.callback-hell
// getCountryAndNeighbourData('usa');


// 005.promises-and-fetch-api
let response = fetch('https://restcountries.com/v2/name/portugal');
console.log(response) // prints Promise {<pending>}


// 006.consuming-promises
const getCountryDataUsingPromise = function (country) {
    /*
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(console.log(data));
            renderCountry(data[0]);
        });
    */


    // Simplified version with arrow functions
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => renderCountry(data[0]));
};

// Uncomment to run 006.consuming-promises
// getCountryDataUsingPromise('portugal');


// 007.chaining-promises
const getNeighbouringCountryDataUsingPromises = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) return;

            // Country 2
            // Ensure that the new promise is returned from here
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'));
};

getNeighbouringCountryDataUsingPromises('germany');
