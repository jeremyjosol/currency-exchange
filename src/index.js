import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/exchangerate.js';
import {currencyConverter} from './js/utility.js';

async function getMoney(currencyValue, usDollar, foreignCurrency) {
  const response = await ExchangeRate.getMoney(usDollar, foreignCurrency);
  const validCurrency = Object.keys(response.conversion_rates);
  
  if (response.result === "error") {
    outputError(response);
  } else if (isNaN(currencyValue) || currencyValue < 0) {
    document.querySelector('#showConversion').innerHTML = `<p class="error">Please enter a valid number.</p>`;
  } else if (!validCurrency.includes(foreignCurrency)) {
    document.querySelector('#showConversion').innerHTML = `<p class="error">Enter a valid currency.</p>`;
  } else {
    convertCurrency(response, currencyValue, usDollar, foreignCurrency);
  }
}

// UI Logic

function convertCurrency(response, currencyValue, usDollar, foreignCurrency) {
  document.getElementById("showConversion").innerHTML = `<h2>${usDollar} $${currencyValue}</h2>  <h3> = </h3>
  <h2>${foreignCurrency} ${currencyConverter(currencyValue, response.conversion_rates[foreignCurrency])}</h2>`;
}

function outputError(error) {
  document.getElementById("showConversion").innerHTML = `<p class="error">An error occurred: ${error}</p>`;
}

function handleConversion(event) {
  event.preventDefault();
  const currencyValue = document.getElementById("amount").value;
  document.getElementById("amount").value = null;
  const usDollar = document.getElementById("usd").value.toUpperCase();
  const foreignCurrency = document.getElementById("foreigncurrency").value.toUpperCase();
  document.getElementById("foreigncurrency").value = null;
  getMoney(currencyValue, usDollar, foreignCurrency);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleConversion);
});
