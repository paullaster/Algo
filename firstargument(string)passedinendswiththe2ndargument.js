const firstArgendInSecondArg = (firstArg, secondArg) => {
    firstArg = firstArg.toLowerCase();
    secondArg = secondArg.toLowerCase();
    const lengthOfSecondArg = secondArg.length;
    const lengthOfFirstArg = firstArg.length;
    const fistArgEndSubstring = firstArg.substring(lengthOfFirstArg - lengthOfSecondArg);
    return fistArgEndSubstring === secondArg;
}

console.log(firstArgendInSecondArg('abc', 'd'));