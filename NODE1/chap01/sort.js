let array = [];

for (let i = 1; i <= 100; i++) {
    array.push(Math.floor(Math.random() * 100 + 1));
}

array.sort((a, b) => a - b);
console.log(array);



