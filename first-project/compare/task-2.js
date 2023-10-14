let question_1 = "Сколько будет 2 + 2?";
let originalAnswer_1 = 4;
let question_2 = "Сколько будет 2 * 2?";
let originalAnswer_2 = 4;
let question_3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
let originalAnswer_3 = 1;
let question_4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
let originalAnswer_4 = 12;
let question_5 = "Сколько будет 2 + 2 * 2?";
let originalAnswer_5 = 6;

let correctAnswerCounter = 0;
let incorrectAnswerCounter = 0;

userAnswer_1 = Number(prompt(question_1).trim());
switch (userAnswer_1) {
  case originalAnswer_1 :
    alert("Ответ Верный!");
    ++correctAnswerCounter;
    break;
  default: 
    alert("Ответ Неверный")
    ++incorrectAnswerCounter;
    break;
}

userAnswer_2 = Number(prompt(question_2).trim());
switch (userAnswer_2) {
  case originalAnswer_2 :
    alert("Ответ Верный!");
    ++correctAnswerCounter;
    break;
  default: 
    alert("Ответ Неверный")
    ++incorrectAnswerCounter;
    break;
}

userAnswer_3 = Number(prompt(question_3).trim());
switch (userAnswer_3) {
  case originalAnswer_3 :
    alert("Ответ Верный!");
    ++correctAnswerCounter;
    break;
  default: 
    alert("Ответ Неверный")
    ++incorrectAnswerCounter;
    break;
}

userAnswer_4 = Number(prompt(question_4).trim());
switch (userAnswer_4) {
  case originalAnswer_4 :
    alert("Ответ Верный!");
    ++correctAnswerCounter;
    break;
  default: 
    alert("Ответ Неверный")
    ++incorrectAnswerCounter;
    break;
}

userAnswer_5 = Number(prompt(question_5).trim());
switch (userAnswer_5) {
  case originalAnswer_5 :
    alert("Ответ Верный!");
    ++correctAnswerCounter;
    break;
  default: 
    alert("Ответ Неверный")
    ++incorrectAnswerCounter;
    break;
}

alert(`Конец теста! Правильные ответы - ${correctAnswerCounter}; Неправильные ответы - ${incorrectAnswerCounter}.`);

