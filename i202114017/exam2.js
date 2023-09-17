function average() {
    return Array.from(arguments).reduce((a, b) => a + b) / arguments.length;
}

console.log(average(1, 2, 3, 4));
console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5, 6));