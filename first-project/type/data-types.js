// Типы данных в JavaScript

// ПРИМИТИВЫ

// 1. number (int & float)
const varNum = 9;
console.log("varNum", varNum, typeof(varNum));

// 2. string
const varStr = "Hello World!";
console.log("varStr", varStr, typeof(varStr));

// 3. boolean
const varBool = true;
console.log("varBool", varBool, typeof(varBool));

// 4. bigint
const varBi = BigInt(900);
console.log("varBi", varBi, typeof(varBi));

// 5. null
const varNull = null;
console.log("varNull", varNull, typeof(varNull));

// 6. symbol
const varSym = Symbol("Moscow");
console.log("varSym", varSym, typeof(varSym));

// 7. undefined
const varUnd = undefined;
console.log("varUnd", varUnd, typeof(varUnd));

// НЕ ПРИМИТИВЫ (СЛОЖНЫЙ ТИП ДАННЫХ)
// 8. object
const varObj = {
  car: "Jeep",
  color: "Velvet",
  price: 9500000,
}
console.log("varObj", varObj, typeof(varObj));

