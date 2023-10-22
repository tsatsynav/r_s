let inputNumber = +(prompt("Введите число:").trim());

function getDivisorsCount(number) {
  if (!Number(number)) {
    return NaN;
  } else if (number < 0 || number % 1 !== 0) {
    return `Число должно быть целым и больше нуля!`;
  }
  
  let count = 0;
  let i = 1;
  for (i; i <= number; i++) {
      if (number % i === 0) {
      count += 1;
    } 
  }
  return count;    
}

alert(getDivisorsCount(inputNumber));