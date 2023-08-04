const removeFromArray = function(array) {
    let arrayInt = array.flat();
    for (let i = 1; i < arguments.length; i++) {
        let index = arrayInt.indexOf(arguments[i]);
        if (index > -1) {
            arrayInt.splice(index, 1);
        }
    }
    return arrayInt;
}

// Do not edit below this line
module.exports = removeFromArray;
