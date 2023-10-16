let health = Number(prompt('Введите число параметра "здоровье" для персонажа').trim());
console.log(health);
if (health < 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!');
  console.log('no success')
} else {
  alert(`Параметр "здоровье" равен ${health}`);
  console.log('success')
}