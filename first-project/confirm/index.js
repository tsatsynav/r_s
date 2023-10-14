let question_1 = "JavaScript появился в 1995 году?";
let question_2 = "Спецификация JavaScript называется ECMAScript?";
let question_3 = "JavaScript был создан за 1 месяц?";

let answer_1 = confirm(question_1);
if (answer_1 === true) {
  alert("Верно!");
} else {
  alert("Вы ответили неправильно! Правильный ответ: JavaScript появился в 1995 году.");
}

let answer_2 = confirm(question_2);
if (answer_2 === true) {
  alert("Верно!");
} else {
  alert("Вы ответили неправильно. Правильный ответ: Спецификация JavaScript называется ECMAScript.");
}

let answer_3 = confirm(question_3);
if (answer_3 === false) {
  alert("Верно! JavaScrip был создан за 10 дней! ");
} else {
  alert("В ответили неправильно. Правильный ответ: JavaScript был создан за 10 дней!");
}