//Regular Expressions: Positive and Negative Lookahead

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);



/*
 /(?=\w{5,}) checks if word character exist. Minimum length 5 ch.
 
 (?=\D*\d{2})/; checks if digit character exist - 2 consecutive digits


*/