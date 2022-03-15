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
const heigherThan20 = (numbers) => {
  const number = arithmeticAverage(numbers);
  const isgreaterThan20 = number > 20;

  if (isgreaterThan20) {
    return 'valor maior que 20';
  }

  return 'valor menor igual a 20';
}

// console.log('Média:' + arithmeticAverage(numbers));
// console.log(heigherThan20(numbers));