export default class ExchangeRate {
  static async getMoney(amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/EUR/GBP/${amount}`);
      const moneyResponse = await response.json();

      if (!response.ok) {
        const errorMessage = `${moneyResponse.error} ${moneyResponse.error['error-type']}`
        throw new Error(errorMessage);
      }
      return moneyResponse;
    
    } catch(error) {
      return error;
    }
  }
}