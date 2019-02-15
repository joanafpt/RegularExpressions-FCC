//Regular Expressions: Match All Non-Numbers

//Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let numString = "Your sandwich will be $5.00";
let noNumRegex = /[\D]/ig; // Change this line
let result = numString.match(noNumRegex).length;
console.log(numString.match(noNumRegex).length);