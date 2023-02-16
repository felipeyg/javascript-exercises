const reverseString = function(string) {
    const reversedString = new Array();
    for (let i = string.length; i >= 0; i--) {
        stringArray = string.split("");
        reversedString.push(stringArray[i]);
    } return reversedString.join("");
}

// Do not edit below this line
module.exports = reverseString;
