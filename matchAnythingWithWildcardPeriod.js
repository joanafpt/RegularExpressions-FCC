//Regular Expressions: Match Anything with Wildcard Period

//Complete the regex unRegex so that it matches the strings "run", "sun", "fun", "pun", "nun", and "bun". Your regex should use the wildcard character.

let exampleStr = "Let us go on a run.";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);