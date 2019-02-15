//Regular Expressions: Restrict Possible Usernames

//Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);



/* REMINDER:

^ - Outside of a character set, the caret is used to search for patterns at the beginning of strings.

{2, } - Usernames have to be at least two characters long. {2,} A two-letter username can only use alphabet letter characters. ^[a-z]

\d , * , $ - The only numbers in the username have to be at the end. \d$ There can be zero or more of them at the end. *

/i  - Username letters can be lowercase and uppercase. 

END OF COMMENT */