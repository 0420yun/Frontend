let array = [];

for (let i = 1; i <= 100; i++) {
  array.push(Math.floor(Math.random() * 100 + 1));
}

for (let i = array.length - 1; i >= 0; i--) {
  if (array[i] % 2 === 0) {
    array.splice(i, 1);
  }
}

console.log(array);