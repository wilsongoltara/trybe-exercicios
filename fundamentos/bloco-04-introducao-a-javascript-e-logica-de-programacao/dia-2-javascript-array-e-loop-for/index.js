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

// console.log(lowerNumber(numbers));


// 8 - 1 até 25
const oneToTwentyFive = (() => {
  let numbers = [];
  for (let i = 1; i <= 25; i++) {
    numbers.push(i);
  }
  return numbers;
});
// console.log(oneToTwentyFive());

// 9 - Divide pela metade

const divideByTwo = (() => {
  const numbers = oneToTwentyFive();
  let divided = [];
  numbers.forEach((element) => {
    divided.push(element / 2);
  });
  return divided;
});

// console.log(divideByTwo());

// Exercícios Bônus

// Bônus 1 - Ordene em ordem crescente
// Bubble sort
const bubbleSort = ((array) => {
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
});

// Bônus 2 - Ordene em ordem decrescente
const descendingOrder = ((array) => {
  for (let index = array.length; index >= 0; index -= 1) {
    for (let secondIndex = array.length - 1; secondIndex > 1; secondIndex -= 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  return array;
});

// Bônus 3 - Ordene em ordem crescente

const mutiplyByFollowing = ((array) => {
  let multiplied = [];
  for (let index = 0; index < array.length; index += 1) {
    if(array[index + 1]){
      multiplied.push(array[index] * array[index + 1]);
    } else {
      multiplied.push(array[index] * 2);
    }
  }
  return multiplied;
});

// console.log(mutiplyByFollowing(numbers));