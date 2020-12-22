const Maths = require('../src/maths')

it('Sums', () => {
    const test = new Maths(1,2)
    expect(test.sum()).toBe(3)
});

it('Subtracts', () => {
    const test = new Maths(9,2)
    expect(test.subtract()).toBe(7)
});

it('Subtracts (negative result)', () => {
    const test = new Maths(4,10)
    expect(test.subtract()).toBe(-6)
});

it('Multiplies', () => {
    const test = new Maths(3,2)
    expect(test.multiply()).toBe(6)
});

it('Divides', () => {
    const test = new Maths(20,4)
    expect(test.divide()).toBe(5)
});

