import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import css directory here
import ExchangeRate from './exchangerate.js';

async function getMoney(compare, amount) {
  try {
    const response = await ExchangeRate.getMoney(compare, amount);
  
    if (response && response.result === "success") {
      outputMoney(response);
  }   else {
      outputError(response);
  }
} catch (error) {
  outputError(error);
  }
}

// UI Logic

function outputMoney(response) {
  document.querySelector('#showConversion').innerHTML = `Amount ${response.conversion_result}`;
}

function outputError(error) {
  if (error.result === "error") {
  document.querySelector('#showConversion').innerHTML = `${error.result} Code: ${error['error-type']}`;
  } else {
    document.querySelector('#showConversion').innerHTML = "An unknown error has occurred. Please refer to the documentation.";
  }
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