//T⭑ Bài 1 - In dãy Fibonacci

// let a = 0;
// let b = 1;
// for (let i = 0; i <= 20; i++) {
//   let next = a + b;
//   a = b;
//   b = next;
//   console.log(next);
// }

//-----------------------------------------------------------------------------------------
//T⭑ Bài 2 -Tính giai thừa của một số nguyên dương

while (true) {
  let useInput = parseInt(prompt(" Hãy nhập vào một số nguyên dương :"));
  if (isNaN(useInput) || useInput < 0) {
    prompt(" Số nguyên dương bạn nhập không đúng ! Xin hãy nhập lại !");
  } else {
    let result = 1;
    for (let i = 1; i <= useInput; i++) {
      result = result * i;
    }
    alert(" Giai thừa của số nguyên dương bạn nhập có kết quả là : " + result);
  }
}
