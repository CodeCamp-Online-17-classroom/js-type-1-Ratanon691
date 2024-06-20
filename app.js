let a = undefined;
let b = 2;
let c = a++;

let d = String(a)
let e = String(b)
let f = String(c)
console.log(d, e, f)
//d = `NaN`, e = `2`, f = `NaN`
//เพราะว่า a เป็น undefined ตั้งแต่แรกอยู่แล้ว ทำให้ c เป็น undefined ไปด้วย เพราะ a เป็น NaN เมื่อ increment แล้วก็ยังเป็น NaN อยู่ดี
