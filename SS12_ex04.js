//T⭑ Bài 1 - Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i === 99) {
//     console.log(" Đã hoàn thành !");
//   }
// }

//---------------------------------------------------------------------------------------------
//T⭑ Bài 2-Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

// let userPut;
// do {
//   userPut = Number(prompt(` Xin hãy nhập nhiệt độ hiện tại :`));
// } while (isNaN(userPut));
// if (userPut > 100) {
//   alert(` Hãy giảm nhiệt độ !`);
// } else if (userPut < 20) {
//   alert(` Hãy tăng nhiệt độ !`);
// } else {
//   alert(` Nhiệt độ hiện tại thích hợp !`);
// }

//---------------------------------------------------------------------------------------------
//T⭑ Bài 3 - Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

// let fibCount = 0; // Số đếm dãy fib bắt đầu từ 0
// let a = 0; // số đầu tiên trong dãy số là a gán giá trị = 0
// let b = 1; // số  thứ 2 trong dãy số là b gán giá trị = 1

// while (fibCount < 20) {
//   // trường hợp sử dụng vòng lặp while : vòng lặp kết thúc khi tìm được 20 số
//   console.log(a); // in ra màn hình giá trị a
//   let next = a + b; // đặt biến next giá trị tiếp theo sau a và b với giá trị bằng tổng a + b

//   a = b; // sau đó gán giá trị a = b
//   b = next; // gán giá trị b = next
//   fibCount++; // mỗi vòng lặp thì giá trị fibCount tăng lên 1
// }

// // Vòng 1 : in ra giá trị a = 0
// // next = 0 + 1
// // tiếp theo a = b = 1
// // b = next = 1

// // vòng 2 : in ra giá trị a = 1
// // next = 1 + 1 = 2
// // a = b = 1
// // b = next = 2

// // Vòng 3 : in ra giá trị a = 1
// // next  = 1 + 2 = 3
// // a = b = 2
// // b = next = 3

// // Vòng 4 : in ra giá trị a = 2
// // next = 2 + 3 = 5
// // a = b = 3
// // b = next = 5

// // Vòng 5 : in ra giá trị a = 3
// // next = 3 + 5 = 8
// // a = b = 5
// // b = next = 8
//................................................................

// let a = 0; // gán giá trị số đầu tiên biến a = 0
// let b = 1; // gán giá trị số thứ 2 tên biến b = 1

// for (let fibCount = 0; fibCount < 20; fibCount++) {
//   // điểm bắt đầu vòng lặp từ 0 đến 19 ( 20 số) , mỗi lần số fib +1
//   console.log(a); // in ra số a
//   let next = a + b; // tạo biến next = a + b
//   a = b;
//   b = next;
// }

// Vòng 1 fibCount = 0 , fibCount < 20 , true --> chạy vòng lặp ==> fibCount +1
// in ra số a = 0
// next = a + b = 1
// a = b = 1
// b = next = 1

// Vòng 2 fibCount = 1 , fibCount < 20 , true --> chạy vòng lặp ==> fibCount +1
// in ra số a = 1
// next = a + b = 2
// a = b = 1
// b = next = 2

// Vòng 3 fibCount = 3 , fibCount < 20 , true --> chạy vòng lặp ==> fibCount + 1
// in ra số a = 1
// next = a + b = 3
// a = b = 2
// b = next = 3
//...............................................................

//---------------------------------------------------------------------------------------------
//T⭑ Bài 4-Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

// let a = 0;
// let b = 1;
// let next = a + b;
// while (next % 5 !== 0) {
//   a = b;
//   b = next;
//   next = a + b;
// }
// console.log(next);

// let a = 0;
// let b = 1;
// let next;

// for (;;) {
//   next = a + b;
//   if (next % 5 === 0) {
//     console.log(next);
//     break;
//   }
//   a = b;
//   b = next;
// }

//---------------------------------------------------------------------------------------------
//T⭑ Bài 5 - Tính tổng của 20 số đầu tiên trong dãy fibonacci.

// let a = 0;
// let b = 1;
// let sum = a + b;
// for (i = 3; i <= 20; i++) {
//   let next = a + b;
//   sum = sum + next;
//   a = b;
//   b = next;
// }
// console.log(" Tổng 20 số đầu tiên trong dãy fibonacci là : ", sum);

// Vòng 1
// a = 0
// b = 1
// sum (tổng các số trong dãy fib) = 1
// i = 3 < 20 chạy vòng lặp
// next ( số tiếp theo trong dãy fib)  = 1
// sum = sum + next = 1 + 1
// a = 1
// b = 1

// Vòng 2
// a = 1
// b = 1
// sum (tổng các số trong dãy fib) = 2
// i = 4 < 20 ==> chạy vòng lặp
// next ( số tiếp theo trong dãy fib)  = 2
// sum = sum + next = 2 + 2
// a = 1
// b = 2

// vòng 3
// a = 1
// b = 2
// sum (tổng các số trong dãy fib) = 3
// i = 5 < 20 chạy vòng lặp
// next ( số tiếp theo trong dãy fib)  = 3
// sum = sum + next = 4 + 3
// a = 2
// b = 3

// Vòng 4
// a = 2
// b = 3
// sum (tổng các số trong dãy fib) = 5
// i = 6 < 20 chạy vòng lặp
// next ( số tiếp theo trong dãy fib)  = 5
// sum = sum + next = 7 + 5
// a = 3
// b = 5
// dãy fib : 0 , 1 , 1 , 2 , 3 , 5 , 8.....

//---------------------------------------------------------------------------------------------
//T⭑ Bài 6 - Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

// let i = 0;
// let nCount = 0;
// let sum = 0;
// while (nCount < 30) {
//   if (i % 7 === 0) {
//     sum = sum + i;
//     nCount++;
//   }
//   i++;
// }
// console.log("Tổng 30 số tự nhiên đầu tiên chia hết cho 7 là :", sum);

// let nCount = 0;
// let sum = 0;
// for (i = 0; ; i++) {
//   if (i % 7 === 0) {
//     sum = sum + i;
//     nCount++;
//     if (nCount === 30) break;
//   }
// }
// console.log("Tổng 30 số tự nhiên đầu tiên chia hết cho 7 là :", sum);

//---------------------------------------------------------------------------------------------
//T⭑ Bài 7 - Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) console.log("Fizz");
//   else {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) console.log("Fizz");
//   else {
//     console.log(i);
//   }
//   i++;
// }

//---------------------------------------------------------------------------------------------
//T⭑ Bài 8-Game đoán số Nâng cấp game "Hãy thử đoán xem!"
// Thiết kế giao diện gồm 1 Button "Chơi": cho phép người dùng bắt đầu chơi hoặc chơi lại
// Mô tả ứng dụng: Khi người dùng nhấn vào button “Chơi”:
// Ứng dụng hiển thị cửa sổ prompt cho phép người dùng nhập vào muốn đoán trong khoảng nào
// Ứng dụng chọn ra số ngẫu nhiên trong khoảng mà ngườI dùng chọn
// Ứng dụng hiển thị cửa số prompt cho người dùng nhập giá trị mà người dùng đoán
// Ứng dụng lấy kết quả và so sánh với giá trị ngẫu nhiên :
// Nếu bằng thì hiển thị thông báo chúc mừng và kết thúc lượt chơi
// Nếu lớn hơn hoặc bé thua thì hiển thị thông báo lớn hơn hay bé thua và cho phép người dùng lựa chọn lại.
