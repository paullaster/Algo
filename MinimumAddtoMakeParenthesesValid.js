
/**
 * A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

Constraints:

1 <= s.length <= 1000
s[i] is either '(' or ')'.
*/
var s = "(()))(()(";

const minAddToMakeValid = (s) => {
  s = s.toString();
  if (s === "") return 0;
  const sequence = "()";
  let counter = 0;
  let i = s.length;
  while (i--) {
    s = s.split(sequence).join("").trim();
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === sequence[0] && s[i + 1] === sequence[1]) {
        i = i + 1;
    }else {
        counter++;
    }
  }
  return counter;
}

console.log(minAddToMakeValid(s))