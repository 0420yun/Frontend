let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
];

let max = persons.reduce((acc, cur) => {
    if (cur.age > acc.age) {
        return cur;
    } else {
        return acc;
    }
});

console.log(max);