const add = function(...args) {
  let sum = 0;
	for (let i = 0; i < args.length; i++) {
    sum +=args[i]
  };
  return sum;
};

const subtract = function(...args) {
  let difference = args[0] - args[1];
  return difference;
};

const sum = function(array) {
  let sum = 0;
	for (let elements of array) {
    sum +=elements;
  };
  return sum;
};

const multiply = function(array) {
  let product = 1;
	for (let elements of array) {
    product *=elements;
  };
  return product;
};

const power = function(numerator, exponent) {
  let power = 1;
	for (let i = 0; i < exponent; i++) {
    power *= numerator;
  };
  return power;
};

const factorial = function(number) {
  let factorial = 1;
	if (number === 0) {return 1}
  else {
    for (number; number > 0; number--) {
      factorial *= number;
    };
  };
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
