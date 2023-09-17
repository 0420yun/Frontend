function sum(a) {
    let a_sum = 0;
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        a_sum += a[i][j];
      }
    }
    return a_sum;
  }

let a1 = [[1, 2], [3, 4, 5]];
let a2 = [[1], [2, 3, 4], [5, 6]];
console.log(sum(a1));
console.log(sum(a2));