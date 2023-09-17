function move(a) {
    const last = a.pop();
    return a.unshift(last);
}

let a = [1, 2, 3, 4, 5];
for (let i = 0; i < 3; ++i) {
move(a);
console.log(a);
}