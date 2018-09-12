// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    const currencyObject = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0,
    };

    addLowestCurrencyValue(currency);

    for (key in currencyObject) {
        if (currencyObject[key] === 0) {
            delete currencyObject[key];
        }
    }

    return currencyObject;

    function addLowestCurrencyValue(currency) {
        if (currency - 50 >= 0) {
            currencyObject["H"] += 1;
            return addLowestCurrencyValue(currency - 50);
        } else if (currency - 25 >= 0) {
            currencyObject["Q"] += 1;
            return addLowestCurrencyValue(currency - 25);
        } else if (currency - 10 >= 0) {
            currencyObject["D"] += 1;
            return addLowestCurrencyValue(currency - 10);
        } else if (currency - 5 >= 0) {
            currencyObject["N"] += 1;
            return addLowestCurrencyValue(currency - 5);
        } else if (currency - 1 >= 0) {
            currencyObject["P"] += 1;
            return addLowestCurrencyValue(currency - 1);
        }
    }
}
