const isPalindrome = require("./isPalindrome");

test("Checking for palindrome strings", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("haikal")).toBe(false);
  expect(isPalindrome("lol")).toBe(true)
});
