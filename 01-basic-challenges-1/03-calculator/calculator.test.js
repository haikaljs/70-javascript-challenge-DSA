const calculator = require("./calculator")

test("This is simple calculator", () => {

    // Test case inputs
    const number1 = 1
    const number2 = 2
    const operation = '+'


    // Call the function
    let finalResult = calculator(number1, number2, operation)

    // Check the result as expected calculator
    expect(finalResult).toBe(3)
})
