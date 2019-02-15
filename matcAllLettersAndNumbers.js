//Regular Expressions: Match All Letters and Numbers

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w+]/ig; // 
let result = quoteSample.match(alphabetRegexV2).length;

console.log(quoteSample.match(alphabetRegexV2).length);
