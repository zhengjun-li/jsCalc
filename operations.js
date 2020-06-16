const add = (x, y) => +x + +y
const subtract = (x, y) => +x - +y
const multiply = (x, y) => +x * +y
const divide = (x, y) => +x / +y
const special = (x, y) => {
    var num1 = add(x, y)
    var num2 = subtract(x, y)
    return multiply(num1, num2)
}
const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y))
    {
        return false
    }
    return true
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    special,
    validateNumbers
}