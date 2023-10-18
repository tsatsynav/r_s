function getSumOfNumbers(number, type = "") {
  let sum = 0;
  let i = 0;
  if (number === Number || type === "") {
    for (i; i <= number; i++) {
      sum = sum + i;
      console.log(sum);
      //return sum;
    }
  } else if (number === Number || type === "even") {
    for (i; i <= number; i++) {
      sum = sum + i;
      console.log(sum);
    }
  }
}

getSumOfNumbers(10, "even");