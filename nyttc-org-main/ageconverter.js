function ageInDays(age) {
    return age * 365;
}

console.log(ageInDays(30)); // Output: 10950
function ageInDays(age) {
    return age * 365 + Math.floor(age / 4);
}

console.log(ageInDays(30)); // Output: 11023