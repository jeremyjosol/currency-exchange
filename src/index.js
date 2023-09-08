import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import css directory here
import ExchangeRate from './exchangerate.js';

async function getMoney(baseCurrency) {
  try {
    const response = await ExchangeRate.getMoney(baseCurrency);
  
    if (!response) {
      outputError(response);
  }   else {
      outputMoney(response);
  }
} catch (error) {
  outputError(error);
  }
}

// UI Logic

function outputMoney(response) {
  if (response.conversion_rates) {
    document.querySelector('#showConversion').innerHTML = `Amount: ${response.conversion_rates.AED}`;
  } else {
  document.querySelector('#showConversion').innerHTML = `Please enter a correct currency.`;
  }
}

function outputError(error) {
  document.querySelector('#showConversion').innerHTML = `An error has occurred: ${error}`;
}

function handleFormConversion(event) {
  event.preventDefault();
  const baseCurrency = document.querySelector('#amount').value;
  document.querySelector('#amount').value = null;
  getMoney(baseCurrency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormConversion); 
});