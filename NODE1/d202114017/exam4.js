function removes(a) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 3 !== 0)
            result.push(a[i]);  
    }
    return result;
}

console.log(removes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(removes([11, 12, 13, 14, 15]));