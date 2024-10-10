// n > 1
const divisors = (n) => {
    if (typeof n !== 'number') {
        return 'Invalid input. Please provide a number greater than 1.';
    }
    if (n <= 1) return 'Invalidn number';
    let divisorsArr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if (i !== 1 && i !== n) divisorsArr.push(i);
        }
    }    
    return divisorsArr.length ? divisorsArr : 'is prime';
}

console.log(divisors('17'));