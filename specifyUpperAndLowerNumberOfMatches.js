//Regular Expressions: Specify Upper and Lower Number of Matches

//Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);


/* Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".

/Oh - beginning of regex
{3,6} - qty of "h" required
\s - to match whitespace
no/ - the rest of the regex

*/