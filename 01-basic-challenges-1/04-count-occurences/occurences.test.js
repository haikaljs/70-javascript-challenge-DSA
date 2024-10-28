const occurences = require('./occurences')

test("This is count occurences test", () => {

    // Test case inputs
    const myString = 'lollipop'
    const myChar = 'l'
   


    // Call the function
    let finalResult = occurences(myString, myChar)

    // Check the result as expected calculator
    expect(finalResult).toBe(3)
})