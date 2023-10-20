function getSumOfNumbers(number, type) {
  /*if (!number || !isNaN(number)) {
    return NaN;
  }*/

  let sum = 0;
  switch (type) {
    case "odd":
      for (let i = 1; i <= number; i += 2) {
        sum += i;
      }
      break;
    case "even":
      for (let i = 0; i <= number; i += 2) {
        sum += i;
      }
      break;
    default:
      for (let i = 0; i <= number; i++) {
        sum += i;
      }
      break;
  }

  return sum;
}

alert(getSumOfNumbers(10, ""));