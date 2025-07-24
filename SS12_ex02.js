//T⭑ Bài 1 - Chuyển độ C sang độ F
// let celsius = Number(prompt(` Hãy nhập nhiệt độ (°C) :`));
// let fahrenheit = (celsius * 9) / 5 + 32;
// console.log(`${celsius} °C bằng ${fahrenheit} °F `);

//------------------------------------------------------------------------

//T⭑ Bài 2 - Chuyển từ m sang feet
// let meters = Number(prompt(` Hãy nhập vào số m cần chuyển : `));
// let feet = meters * 3.28084;
// console.log(`${meters} m = ${feet} feet `);

//------------------------------------------------------------------------

//T⭑ Bài 3 - Tính diện tích hình vuông khi biết cạnh a
// let a = Number(prompt(` Hãy nhập vào giá trị cạnh a:`));
// let squareArea = a * a;
// console.log(` Diện tích hình vuông là ${squareArea}`);

//------------------------------------------------------------------------

//T⭑ Bài 4 - Tính diện tích hình chữ nhật khi biết cạnh a , b
// let length = Number(prompt(` Nhập vào chiều dài hình chữ nhật :`));
// let width = Number(prompt(` Nhập vào chiều rộng hình chữ nhật :`));
// let rectangleArea = length * width;
// console.log(`Diện tích hình chữ nhật là : ${rectangleArea}`);

//------------------------------------------------------------------------

//T⭑ Bài 5 - Tính diện tích tam giác vuông khi biết cạnh liền kề a và b
// let base = Number(prompt(` Hãy nhập vào cạnh đáy của tam giác vuông :`));
// let height = Number(prompt(` Hãy nhập vào chiều cao của tam giác vuông : `));
// let are = (1 / 2) * base * height;
// console.log(` Diện tích tam giác vuông là : ${are}`);

//------------------------------------------------------------------------

//T⭑ Bài 6 - Giải phương trình bậc 1
// let a = Number(prompt(` Hãy nhập vào số a :`));
// let b = Number(prompt(` Hãy nhập vào số b :`));
// let x = -b / a;
// if (isNaN(a) || isNaN(b)) {
//   console.log(`Số bạn nhập vào không đúng! Xin hãy nhập lại!`);
// } else if (a !== 0) {
//   let x = -b / a;
//   console.log(`Phương trình có nghiệm là: ${x}`);
// } else if (a === 0 && b === 0) {
//   console.log(`Phương trình vô số nghiệm!`);
// } else {
//   console.log(`Phương trình vô nghiệm!`);
// }

//------------------------------------------------------------------------

//T⭑ Bài 7 - Giải phương trình bậc 2
// let a = Number(prompt("Nhập hệ số a:"));
// let b = Number(prompt("Nhập hệ số b:"));
// let c = Number(prompt("Nhập hệ số c:"));

// if (a === 0) {
//   console.log("Đây không phải là phương trình bậc 2!");
// } else {
//   let delta = b * b - 4 * a * c;

//   if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
//   } else if (delta === 0) {
//     let x = -b / (2 * a);
//     console.log(`Phương trình có nghiệm kép: x = ${x}`);
//   } else {
//     console.log("Phương trình vô nghiệm.");
//   }
// }

//------------------------------------------------------------------------

//T⭑ Bài 8 - Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
// Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.

// let age = Number(prompt(` Hãy nhập tuổi của bạn :`));
// if (isNaN(age)) {
//   console.log(` Tuổi bạn nhập vào không hợp lệ ! Hãy nhập lại !!`);
// } else if (Number.isInteger(age) && age < 120 && age > 0) {
//   console.log(` Bạn đúng là con người rồi ! :)`);
// } else {
//   console.log(` Bạn là gì chứ không phải con người !!`);
// }

//------------------------------------------------------------------------
//T⭑ Bài 9

let a = Number(prompt(` Nhập vào cạnh a:`));
let b = Number(prompt(` Nhập vào cạnh b:`));
let c = Number(prompt(` Nhập vào cạnh c:`));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log(`Giá trị bạn nhập vào không hợp lệ ! Xin hãy nhập lại !!`);
} else if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
  console.log(` a , b , c là ba cạnh của 1 tam giác `);
} else {
  console.log(` a, b , c không phải là 3 cạnh của 1 tam giác`);
}
