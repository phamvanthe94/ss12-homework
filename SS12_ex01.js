//T⭑ Bài 1
// let a = Number(prompt(` Nhập vào số a :`));
// let b = Number(prompt(` Nhập vào số b :`));
// if (a % b === 0) {
//   console.log(` a chia hết cho b !`);
// } else {
//   console.log(` a không chia hết cho b !`);
// }

//------------------------------------------------------------------------

//T⭑ Bài 2
// let age = Number(prompt(` Xin hãy nhập tuổi của bạn hiện tại :`));
// if (age < 15) {
//   console.log(` Bạn không đủ tuổi để vào học lớp 10! `);
// } else {
//   console.log(` Bạn đủ tuổi để vào học lớp 10! `);
// }

//------------------------------------------------------------------------

//T⭑ Bài 3
// let number = Number(prompt(` Hãy nhập một số bất kỳ bạn thích :`));
// if (number > 0) {
//   console.log(` bạn nhập số ${number} là số lớn hơn 0 `);
// } else if (number < 0) {
//   console.log(` bạn nhập số ${number} là số nhỏ hơn-2 0 `);
// } else {
//   console.log(` Số bạn nhập không hợp lệ ! Xin hãy nhập lại !`);
// }

//------------------------------------------------------------------------

//T⭑ Bài 4

// let a = Number(prompt(` Hãy nhập vào số nguyên a : `));
// let b = Number(prompt(` Hãy nhập vào số nguyên b : `));
// let c = Number(prompt(` Hãy nhập vào số nguyên c : `));
// if (a > b && a > c) {
//   console.log(` ${a} là số lớn nhất !`);
// } else if (b > a && b > c) {
//   console.log(` ${b} là số lớn nhất !`);
// } else if (c > a && c > b) {
//   console.log(` ${c} là số lớn nhất !`);
// } else {
//   console.log(` Số bạn nhập vào không hợp lệ ! Xin hãy nhập lại !`);
// }

//------------------------------------------------------------------------

//T⭑ Bài 5

let testScore = Number(prompt(` Nhập vào điểm bài kiểm tra của bạn :`));
let midtermScore = Number(prompt(` Nhập vào điểm thi giữa kỳ của bạn :`));
let finalExamScore = Number(prompt(` Nhập vào điểm thi cuối kỳ của bạn :`));
let averageScore = (testScore + midtermScore + finalExamScore) / 3;
if (averageScore >= 9) {
  console.log(` Học lực của bạn thuộc loại : Xuất Sắc`);
} else if (averageScore >= 8 && averageScore < 9) {
  console.log(` Học lực của bạn thuộc loại : Giỏi`);
} else if (averageScore >= 6.5 && averageScore < 8) {
  console.log(` Học lực của bạn thuộc loại : Khá`);
} else if (averageScore >= 5 && averageScore < 6.5) {
  console.log(` Học lực của bạn thuộc loại : Trung Bình`);
} else if (averageScore < 5) {
  console.log(` Học lực của bạn thuộc loại : Yếu`);
} else {
  console.log(`Điểm bạn nhập vào không hợp lệ ! Xin hãy nhập lại !`);
}
