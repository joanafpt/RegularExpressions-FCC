//Regular Expressions: Match Beginning String Patterns

//Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.

/*In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(calRegex.test(rickyAndCal));
//returns true