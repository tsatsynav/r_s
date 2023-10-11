// Приведение/преобразование типов

let varNum = 0;
console.log(Number(varNum), Boolean(varNum), String(varNum));
let varStr = "0";
console.log(Number(varStr), Boolean(varStr), String(varStr));
let varBint = 100n;
console.log(Number(varBint), Boolean(varBint), String(varBint));
let varSymb = Symbol("Moscow");
//console.log(Number(varSymb), Boolean(varSymb), String(varSymb));
let varBool = true;
console.log(Number(varBool), Boolean(varBool), String(varBool));
let varObj = {
  car: "Jeep",
};
console.log(Number(varObj), Boolean(varObj), String(varObj));
let varUndef = undefined;
console.log(Number(varUndef), Boolean(varUndef), String(varUndef));
let varNull = null;
console.log(Number(varNull), Boolean(varNull), String(varNull));

