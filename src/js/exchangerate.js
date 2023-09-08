export default class ExchangeRate {
  static async getMoney(usDollar) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${usDollar}/`);
      const moneyResponse = await response.json();

      if (!response.ok) {
        const errorMessage = `An error has occurred. ${moneyResponse.error} ${moneyResponse.error['error-type']}`;
        throw new Error(errorMessage);
      }
      return moneyResponse;
    } catch(error) {
      return error;
    }
  }
}