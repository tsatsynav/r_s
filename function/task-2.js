let userNum = Number(prompt("Введите число:").trim());
let userEvenOddSolution = (prompt("Укажите порядок расчета (четный или нечетный, если сплошной - нажмите Ок):").trim().toLowerCase());
let evenIter = (userNum % 2) + 2;
// const oddIter = (userNum % 2) + 1;
// console.log(evenIter);
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
    for (evenIter; evenIter <= number; evenIter++) {
      sum = sum + (evenIter - 1);
      console.log(sum);
    }
  }
}

getSumOfNumbers(userNum, userEvenOddSolution);