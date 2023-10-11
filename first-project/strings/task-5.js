const userString = prompt("Введите текст для обрезки").trim();
const startSliceIndex = Number(prompt("Введите индекс, с которого нужно начать обрезку строки").trim());
const endSliceIndex = Number(prompt("Введите индекс, которым нужно закончить обрезку строки").trim());

const finalString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${finalString}`);