function sum(a) {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }
    return total;
}

function test_sum(callback) {
    let a = [];

    for (let i = 0; i < 5; i++) {
        a.push(Math.floor(Math.random() * 11));
    }
    
    console.log(a);
    const result = callback(a);
    console.log(result);
}

for (let i = 0; i < 5; i++) {
    test_sum(sum);
}