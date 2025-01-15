// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInYen){
    let valueInDollar = valueInYen * 156.5;
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0056;
    return Number(valueInPound);
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }