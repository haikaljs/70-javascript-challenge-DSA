function calculator(num1, num2, operation) {
  let result;

  //   if (typeof (num1) !== "number") {
  //     return "Num1 should be number";
  //   }

  //   if (typeof(num2) !== "number") {
  //     return "Num2 should be number";
  //   }

  //   if (typeof operation !== "string") {
  //     return "Operator should be string";
  //   }

  //   if (operation === "+") {
  //     return (result = num1 + num2);
  //   }

  //   if (operation === "-") {
  //     return (result = num1 - num2);
  //   }

  //   if (operation === "*") {
  //     return (result = num1 * num2);
  //   }

  //   if (operation === "/") {
  //     return (result = num1 / num2);
  //   }

  //   return result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid Operator");
  }

  return result;
}

module.exports = calculator;
