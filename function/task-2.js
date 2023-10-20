let inputNumber = +(prompt("Введите число:").trim());
let inputType = prompt("Введите even или odd для определения требуемого порядка пересчета чисел").trim().toLowerCase();

function getSumOfNumbers(number, type) {
  let sum = 0;
  if (!number) {
    return NaN;
  } else if (type === "odd") {
    for (let i = 1; i <= number; i+=2) {
      sum += i;
    }
  } else if (type === "even") {
    for (let i = 0; i <= number; i+=2) {
      sum += i;
    }    
  } else {
    for (let i = 0; i <= number; i++) {
      sum += i;
    }
  }
  return sum;
};

alert(getSumOfNumbers(inputNumber, inputType));