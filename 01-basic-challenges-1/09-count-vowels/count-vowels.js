// Solution 1

// function countVowels(str) {
  // loop the str
  // check vowels
  // temp var to hold count

//   formattedStr = str.toLowerCase();

//   let count = 0;

//   for (let i = 0; i < formattedStr.length; i++) {
//     if ("aeiou".includes(formattedStr[i])) {
//       count++; 
//     }
//   }

//   return count;
// }

// Solution 2

function countVowels(str) {
  // loop the str
  // check vowels
  // temp var to hold count

  formattedStr = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "0" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("haikal"));
// module.exports = countVowels
