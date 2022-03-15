const arrayOfNumbers = (() => {
  const array = [];
  for (let i = 0; i <= 50; i++) {
    array.push(i);
  }
  return array;
});

const isPrime = ((numbers) => {
  const array = arrayOfNumbers();
  let prime = true;
  for (let number of array) {
    if (numbers % number === 0 && number !== 1 && number !== numbers) {
      prime = false;
    }
  }
  return prime;
});

const majorPrime = ((numbers) => {
  let major = numbers[0];
  for (let number of numbers) {
    if (isPrime(number) && number > major) {
      major = number;
    }
  }
  return major;
});
