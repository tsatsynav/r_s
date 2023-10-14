let i = 0;
let c = 0;

while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!").trim();  
  //console.log(`while ${i}`);
  alert(`Добро пожаловать, ${newStudent}!`);
  ++i;
}

do {
  let newStudent = prompt("Введите имя нового студента!").trim();  
  //console.log(`do while ${c}`);
  alert(`Добро пожаловать, ${newStudent}!`);
  ++c;
} while (c < 3);