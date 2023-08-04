const sumAll = function(firstNumber, secondNumber) {
    let min = 0;
    let max = 0;
    let sum = 0;
    if (firstNumber !== Number(firstNumber) || secondNumber !== Number(secondNumber)) {return 'ERROR'}
    if (firstNumber <= secondNumber) {
        min = firstNumber;
        max = secondNumber;
    } else {
        min = secondNumber;
        max = firstNumber;
    }
    if (min < 0) {return 'ERROR'};
    for (min; min < max+1; min++) {
        sum += min;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
