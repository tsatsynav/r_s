let inputNumber = Number(prompt("Введите число:").trim());
let inputType = prompt("Введите even или odd для определения требуемого порядка пересчета чисел").trim().toLowerCase();
// console.log(inputNumber);
// console.log(inputType);
function getSumOfNumbers(number, type) {
  console.log(number);
  let sum = 0;
  if (type === "") {
    for (let i = 0; i <= 10; i++) {
      console.log(sum);
      console.log(number);
      console.log(i);
      sum = sum + i;
      console.log(number);
      console.log(sum);
      console.log(i);
      return sum;
    }
  } else /*(number !== Number)*/ {
    return NaN;
  }
  /*for(let i = 0; i <= number; i++) {
    if (type === "") {
      console.log(i);
      console.log(totalSum = totalSum + i);
      return totalSum += i;
    } else if (i % 2 !== 0 || type === "odd") {
      console.log(2);
      console.log(oddSum += i);
      return oddSum += i;
    } else if (i % 2 === 0 || type === "even") {
      console.log(3);
      return evenSum += i;
    } else {
      console.log(4);
      return NaN;
    }
  }*/
}

alert(getSumOfNumbers(inputNumber, inputType));