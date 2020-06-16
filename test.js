const assert = require('assert')
const operations = require('./operations.js')

//Unit tests for add, subtract, multiply, divide, and validateNumbers
it('correctly calculates 1 + 3', () => {
    assert.equal(operations.add(1, 3), 4)
})

it('correctly calculates -1 + -1', () => {
    assert.equal(operations.add(-1, -1), -2)
})

it('correctly calcualtes 33 - 3', () => {
    assert.equal(operations.subtract(33, 3), 30)
})

it('correctly calcualtes -5 - -19', () => {
    assert.equal(operations.subtract(-5, -19), 14)
})

it('correctly calcualtes 12 * 12', () => {
    assert.equal(operations.multiply(12, 12), 144)
})

it('correctly calculates 10 % 2', () => {
    assert.equal(operations.divide(10, 2), 5)
})

it('correctly calculates 6 / 0', () => {
    assert.equal(operations.divide(-6, 0), -Infinity)
})

it('correctly calculates -6 / 0', () => {
    assert.equal(operations.divide(-6, 0), -Infinity)
})

it('correctly calculates 0 / 0', () => {
    assert.strictEqual(operations.divide(0, 0), NaN)
})

it('correctly calculates 0 / 8', () => {
    assert.strictEqual(operations.divide(0, 0), NaN)
})

it('correctly indicates failure when 1 string is used instead of number', () => {
    assert.equal(operations.validateNumbers('string', 3), false)
})

it('correctly indicates failure when 2 string is used instead of number', () => {
    assert.equal(operations.validateNumbers('string', 'string2'), false)
})

it('correctly indicates success when both are numbers', () => {
    assert.equal(operations.validateNumbers(3, 4), true)
})

//Integration test for 'special' operation, which utilizes add, subtract, and multiply operations
it('correctly calculates special operation of 6 and 9', () => {
    assert.equal(operations.special(6, 9), -45)
})

it('correctly calculates special operation of -16 and 9', () => {
    assert.equal(operations.special(-16, 9), 175)
})

it('correctly calculates special operation of 0 and 0', () => {
    assert.equal(operations.special(0, 0), 0)
})
