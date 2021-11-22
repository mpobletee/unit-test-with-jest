/* const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
}); */

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
     expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("One dollar should be 1918.5 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(15)
    const expected = 15 * 127.9; 
     expect(fromDollarToYen(15)).toBe(1918.5);
})
test("One yen should be 8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(10)
    const expected = 10 * 0.8; 
     expect(fromYenToPound(10)).toBe(8);
})