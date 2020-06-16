const operations = require('./operations.js')
const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
console.log('Welcome to JavaScript Calculator Unit testing using Node.js')
r1.question('Enter first number: ', x => {
    r1.question('Enter second number: ', y => {
        r1.question(`Select operation:
        1 - Add
        2 - Subtract
        3 - Multiply
        4 - Integer Divide 
        5 - Special operation : 
        Enter selection: `, choice => {
            if(!operations.validateNumbers(x, y)) {
                console.log("Only numbers are allowed, please restart program")
            } 
            else
            {
                switch(choice) {
                    case '1':
                        console.log(`Sum of ${x} and ${y} is ${operations.add(x, y)}`)
                        break
                    case '2':
                        console.log(`Difference of ${x} and ${y} is ${operations.subtract(x, y)}`)
                        break
                    case '3':
                        console.log(`Product of ${x} and ${y} is ${operations.multiply(x, y)}`)
                        break
                    case '4':
                        console.log(`Quotient of ${x} and ${y} is ${operations.divide(x, y)}`)
                        break
                    case '5':
                        console.log(`Special operation of ${x} and ${y} is ${operations.special(x, y)}`)
                        break
                    default:
                        console.log(`Incorrect choice number, please retsart program`)
                        break
                }
            }
            r1.close()
        })
    })
})