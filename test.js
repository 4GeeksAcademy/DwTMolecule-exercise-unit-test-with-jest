// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// test ("One yen should be 0,0056 british pound " ,()=>
//      {
//     const { fromYenToPound }  = require('./app.js');
//     //si 1 yen son 0.0056 libras esterlinas, entonces
//     expect(fromYenToPound(1)).toBe(0.0056); 

// })

test("One yen should be 0,0056 british pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
     // Hago mi comparación (la prueba)
    expect(fromYenToPound(1)).toBe(0.0056); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("One dollar shoul be 156.5 japan yen", function
    (){
        const {fromDollarToYen} = require('./app.js')
        expect(fromDollarToYen(1)).toBe(156.5);
    }
)