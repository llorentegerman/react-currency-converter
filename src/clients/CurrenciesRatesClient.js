const getRates = async () => {
    const url = 'https://api.exchangeratesapi.io/latest';
    const response = await fetch(url);
    const json = await response.json();
    return {
        euro: 1,
        dollar: json.rates.USD,
        yen: json.rates.JPY
    };
};
export default {
    getRates
};
