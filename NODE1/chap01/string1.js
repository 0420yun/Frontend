let s = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let vowels = "aeiou";

// 모음 위치
for (let i = 0; i < s.length; i++) {
  let char = s.charAt(i);
  if (vowels.indexOf(char.toLowerCase()) !== -1) {
    console.log(`${char} : ${i}`);
  }
}

// 공백 제거
let a = s.replace(/ /g, '');
console.log(a);

// 공백을 기준으로 문자열 쪼개기
let arr = s.split(" ");
console.log(arr);
