function verificaPalindrome(string) {
  if (string.length === 0) {
    return 'Erro!';
  }
  
  let reversed = string.split('').reverse().join('');
  if (string === reversed) {
    return true;
  }
  return false;
}

function indexHighestValue(integers) {
  if (integers.length === 0) {
    return 'Array vazio!';
  }
  
  let highestValue = integers.reduce((a, b) => {
    return Math.max(a, b);
  });

  let indexValue = integers.indexOf(highestValue);
  return indexValue;
}

function indexLowerValue(integers) {
  if (integers.length === 0) {
    return 'Array vazio!';
  }

  let lowerValue = integers.reduce((a,b) => {
    return Math.min(a, b);
  });

  let indexValue = integers.indexOf(lowerValue);
  return indexValue;
}

function mostCaractere(arrayOfWords) {
  let lengthWords = {};

  for (let index in arrayOfWords) {
    lengthWords[arrayOfWords[index]] = arrayOfWords[index].length;
  }

  let mostWord = '';
  let aux = 0;
  for (let key in lengthWords) {
    if(lengthWords[key] > aux) {
      aux = lengthWords[key]
      mostWord = key;
    }
  }
  return mostWord;
}

console.log(mostCaractere(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

function mostRepeat(integers) {
  let repeatNumbers = {};
  
  if (integers.length === 0) {
    return 'Array vazio!';
  }

  for (let index in integers) {
    if (repeatNumbers[integers[index]]) {
      repeatNumbers[integers[index]]++;
    } else {
      repeatNumbers[integers[index]] = 1;
    }
  }
  let aux = 0;
  let mostRepeatedNumber = 0;
  for (let key in repeatNumbers) {
    if (repeatNumbers[key] > aux) {
      aux = repeatNumbers[key];
      mostRepeatedNumber = key;
    }
  }

  return mostRepeatedNumber;
}