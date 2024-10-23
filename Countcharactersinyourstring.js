/**
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
 */

const countChaaractersInString = (string) => {
    if(!string.length) return {};
    const charcount = {};
    for (let char of string) {
        if (charcount[char]) {
            charcount[char]++;
        } else {
            charcount[char] = 1;
        }
    }
    return charcount;
}

// Test cases
console.log(countChaaractersInString('aba')); // {a: 2, b: 1}
console.log(countChaaractersInString('')); // {}
console.log(countChaaractersInString('abcde')); // {a: 1, b: 1, c: 1, d: 1, e: 1}