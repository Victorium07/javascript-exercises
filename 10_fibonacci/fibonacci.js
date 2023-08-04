const fibonacci = function(index) {
    if (index < 0) {return 'OOPS'}
    index = Number(index);
    let prevElement = 0;
    let currElement = 1;
    let adder = 0;
    for (let i = 1; i < index; i++) {
        prevElement = currElement;
        currElement += adder;
        adder = prevElement;
    };
    return(currElement);
};

// Do not edit below this line
module.exports = fibonacci;
