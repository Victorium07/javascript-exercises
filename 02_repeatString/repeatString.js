const repeatString = function(word, reps) {
    if (reps === 0) {return('')}
    else if (reps < 0) {return('ERROR')}
    else {
        let wordHolder = word;
        for (let i = 1; i < reps; i++) {
        word += wordHolder}
    return(word)}
};

// Do not edit below this line
module.exports = repeatString;
