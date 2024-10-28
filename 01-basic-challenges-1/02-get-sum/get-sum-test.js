const getSum = require('./get-sum')

test('Calculating the sum of two numbers', () => {
    // Test case inputs

    const num1 = 5
    const num2 = 5

    // Call the function
    const result = getSum(num1, num2)

    // Check the result is equal to the expected sum

    expect(result).toBe(10)
})