import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import css directory here
import ExchangeRate from './exchangerate.js';

async function getMoney(amount) {
  const response = await ExchangeRate.getMoney(amount);
  if (response.ok) {
    outputMoney(response);
  } else {
    outputError(response);
  }
}

// UI Logic

function outputMoney(response) {
  document.querySelector('#showConversion').innerText = `${response.result}`;
}

function outputError(error) {
  document.querySelector('showConversion').innerText = `There was an error for ${error}`;
}

function handleFormConversion(event) {
  event.preventDefault();
  const amount = document.querySelector('#amount').value;
  document.querySelector('#amount').value = null;
  getMoney(amount);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormConversion); 
});