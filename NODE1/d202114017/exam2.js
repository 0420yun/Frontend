function dice(a) {
    for (let i = 0; i < 10; i++) {
        a = Math.floor(Math.random() * 6 + 1);
        return a;
    }
}

for (let i = 0; i < 10; i++) {
    console.log(dice());
}