/* const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum }; */


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (usd) => {
    return usd * oneEuroIs.JPY;
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const fromYenToPound = (yen) => {
    return yen * oneEuroIs.GBP;
}

module.exports = {fromDollarToYen, fromEuroToDollar , fromYenToPound};