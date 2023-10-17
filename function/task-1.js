// function declaration
function getName1(name) {
  return name;
}

console.log(getName1('Andrey'));

// function expression
const getName2 = function(name) {
  return name;
};

console.log(getName2('Dodo'));

// arrow function expression
const getName3 = (name) => {
  return name;
}

console.log(getName3('Milena'));