import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import css directory here
import ExchangeRate from './exchangerate.js';

async function getMoney(compare, amount) {
  try {
    const response = await ExchangeRate.getMoney(compare, amount);
  
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
  if (response.conversion_result) {
    document.querySelector('#showConversion').innerHTML = `Amount: ${response.conversion_result.toFixed(2)}`;
  } else {
  document.querySelector('#showConversion').innerHTML = `Please enter a correct currency.`;
  }
}

function outputError(error) {
  document.querySelector('#showConversion').innerHTML = `An error has occurred. Please try again. ${error['error-type']}`;
}

function handleFormConversion(event) {
  event.preventDefault();
  const amount = document.querySelector('#amount').value;
  document.querySelector('#amount').value = null;
  const compare = document.querySelector('#compare').value;
  document.querySelector('#amount').value = null;
  getMoney(compare, amount);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormConversion); 
});