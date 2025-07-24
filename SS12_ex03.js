let primeCount = 0;
let number = 2;
while (primeCount < 20) {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number);
    primeCount++;
  }
  number++;
}
