function reverseString(str) {
  
    // Solution 1
    // const result = str.split('').reverse().join('')
    // return result

    // Solution 2
    let reversed = ''

    for(let i = str.length - 1; i >=0; i--){

        reversed = reversed +  str[i]
    }

    return reversed
}

module.exports = reverseString;
