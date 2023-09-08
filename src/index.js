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