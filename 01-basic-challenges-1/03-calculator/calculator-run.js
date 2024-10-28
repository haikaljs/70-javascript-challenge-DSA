const { boolean } = require("yargs");
const calculator = require("./calculator");

let result = calculator(1, 2, "/");

console.log(result);
