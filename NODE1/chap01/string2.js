let a = ["c:/temp/guid.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"];

// 파일 확장자 출력
for (let i = 0; i < a.length; i++) {
    const path = a[i];
    const ext = path.split('.').pop();
    console.log(ext);
}

// 파일명 출력
for (let i = 0; i < a.length; i++) {
    const path = a[i];
    const filename = path.split('/').pop();
    console.log(filename);
}

// 파일 이름만 출력
for (let i = 0; i < a.length; i++) {
    const path = a[i];
    const filename = path.split('/').pop();
    const name = filename.split('.')[0];
    console.log(name);
}