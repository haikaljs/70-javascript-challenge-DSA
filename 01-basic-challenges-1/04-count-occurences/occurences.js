function occurences(myString, myChar) {
  // Solution 1

  //   let charCount = 0;

  // loop each character
  //   for (let i=0; i < myString.length; i++){

  //       // check each character same, if same increase count number
  //       if(myString[i] === myChar){
  //           charCount++
  //       }

  //   }

  // Solution 2

  // const myStringArray = myString.split('')
  //   myStringArray.forEach((element) => {
  //     if (element === myChar) {
  //       charCount++;
  //     }
  //   });

  //   return charCount;
  // }

  // Solution 3

  const numberOccurences = myString.split(myChar).length - 1;
  return numberOccurences;
}




module.exports = occurences
