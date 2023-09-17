let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]

for (let i = 0; i < a.length; i++) {
    const path = a[i];
    const filename = path.split('/').pop();
    console.log(filename);
}