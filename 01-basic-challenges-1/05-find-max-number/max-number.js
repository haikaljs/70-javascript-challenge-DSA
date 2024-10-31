function maxNumber(arr) {
  // Solution 1
  // return Math.max(...arr)

  // Solution 2

  // set max to first index
  let max = arr[0];
  // loop each element start with second index
  for (let i = 1; i < arr.length; i++) {
    // compare each element with max
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(maxNumber([1000, 2, 3, 4, 5, 6, 7, 8, 100, 800]));
