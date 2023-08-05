const findTheOldest = function(array) {
    let ageArray = [0];
    let ageCalc = 0;
    let today = new Date;
    for (let i = 0; i < array.length; i++) {
        if(array[i].yearOfDeath === undefined) {array[i].yearOfDeath = today.getFullYear();};
        let newAge = array[i].yearOfDeath - array[i].yearOfBirth;
        if (!ageCheck) {continue};
        if (!ageComparison(ageCalc, newAge)) {
            ageCalc = newAge;
            ageArray.splice(0, 1, {
                name: array[i].name,
                age: ageCalc,
                }
            )
        };
    };
    return(ageArray[0]);
};

function ageComparison(age1, age2) {
    if (age1 > age2) {return true}
    else {return false};
};

function ageCheck(age) {
    if (age < 151 && age > -1) {return true}
    else {return false}
}

// Do not edit below this line
module.exports = findTheOldest;
