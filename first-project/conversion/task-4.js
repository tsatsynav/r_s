// 1
console.log(Number(' 1 2 3 4 5')); // 12345; answer - NaN
// 2
console.log(Number('1234 5')); // 12345; answer - NaN
// 3
console.log(Number('12345')); // 1234
// 4
console.log(String(false)); // 'false'
// 5
console.log(Boolean(0000000)); // true; answer - false
// 6
console.log(Boolean(0.0000001)); // true
// 7
console.log(String(undefined)); // 'undefined'
// 8
console.log(Number('100f')); // NaN
// 9
console.log(Number('100')); // 100
// 10
console.log(Number('000001')); // 000001; answer - 1