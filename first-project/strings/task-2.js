const myName = "Андрей";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Владилен";
const reasonText = "я хочу делать реальный продукт";
const numberOfMonth = 0;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. 
Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll("JavaScript", "javascript");
myInfoText = myInfoText.replaceAll("курс", "КУРС");

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length-1]);