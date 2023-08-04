const palindromes = function (sentence) {
    sentence = sentence.toLowerCase().replaceAll('!', '').replaceAll(',', '').replaceAll(' ','').replaceAll('.', '');
    let wordLength = sentence.length;
    let reversedWord = '';
    for (let i = wordLength; i > 0; i--) {
        reversedWord += sentence.slice(i-1,i);
    };
    if (reversedWord === sentence) {return true}
    else {return false};
};

// Do not edit below this line
module.exports = palindromes;
