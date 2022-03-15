let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - imprime todos valores com a funlçao console.log
//console.log(numbers);

// 2 - soma e imprime todos valores
function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
//console.log(somaValores(numbers));

// 3 - Média Aritimética
const arithmeticAverage = (numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

// 4 - Maior que 20
const higherThan20 = (numbers) => {
  const number = arithmeticAverage(numbers);
  const isgreaterThan20 = number > 20;

  if (isgreaterThan20) {
    return 'valor maior que 20';
  }

  return 'valor menor igual a 20';
}
// console.log('Média:' + arithmeticAverage(numbers));
// console.log(heigherThan20(numbers));

// 5 - Maior valor
const higherNumber = ((Numbers) => {
  let height = Numbers[0];
  Numbers.forEach((element) => {
    if (element > height) {
      height = element;
    }
  });
  return height;
});

// console.log(higherNumber(numbers));

// 6 - Conta impáres
const oddCount = ((numbers) => {
  let numberOfodd = 0;
  numbers.forEach((element) => {
    if (element % 2 !== 0) {
      numberOfodd += 1;
    }
  });

  const thereIsOdd = numberOfodd > 0;
  if (thereIsOdd) {
    return numberOfodd;
  }
  
  return 'nenhum valor ímpar encontrado';
});

// console.log(oddCount(numbers));

// 7 - Menor valores
const lowerNumber = ((numbers) => {
  let lower = numbers[0];
  numbers.forEach((element) => {
    if (element < lower) {
      lower = element;
    }
  });
  return lower;
});

console.log(lowerNumber(numbers));