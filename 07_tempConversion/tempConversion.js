function roundToFirstDecimal(number) {
  let decimal = (number * 10) - (Math.floor(number) * 10);
  if (decimal > 5) {return(Math.floor(number) + ((Math.floor(decimal)+1)/10));}
  else {return(Math.floor(number) + (Math.floor(decimal)/10))}
}

const convertToCelsius = function(number) {
  let tempCelsius = ((number - 32) * 5)/9;
  tempCelsius = roundToFirstDecimal(tempCelsius);
  return tempCelsius;
};

const convertToFahrenheit = function(number) {
  let tempFahrenheit = ((number * 9)/5) + 32;
  tempFahrenheit = roundToFirstDecimal(tempFahrenheit);
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
