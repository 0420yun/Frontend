let a = [];

for (let i  = 1; i <= 100; i++) {
    a.push(Math.floor(Math.random() * 100 + 1));
}
console.log(averageNumber(a).toFixed(1));

function averageNumber(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) sum += a[i];
    return sum / a.length;
}