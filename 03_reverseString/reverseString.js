const reverseString = function(word) {
    let numberOfChar = word.length;
    let reversedWord = '';
    for (let i = numberOfChar ; i > -1; i--) {
        let previousChar = word.slice(i, i+1);
        reversedWord += previousChar;
    }
    return(reversedWord)
};

// Do not edit below this line
module.exports = reverseString;
