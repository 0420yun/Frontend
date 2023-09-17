let a = [1, "a", 2, "c", 4, "d", 5, "e", "f", 6, 7];
let numCount = 0;
let strCount = 0;

for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") { numCount++; }    
    else if (typeof a[i] === "string") { strCount++; }
}

console.log(`number: ${numCount} string: ${strCount}`);