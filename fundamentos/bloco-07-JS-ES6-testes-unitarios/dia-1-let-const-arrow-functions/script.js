const testingScope = (escopo) => {
  let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  if (escopo === true) {
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente`);

const fatorial = (number) => {
  return number === 0 ? 1 : number * fatorial(number - 1);
};

// console.log(fatorial(4));

const longestWords = (phrase) => {
  let longestWord =  phrase.split(' ')[0];
  for (let word of phrase.split(' ')) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
};

// longestWords('Antônio foi no banheiro e não sabemos o que aconteceu');]

// const btn = document.getElementById('btn');
// const paragraphCount = document.getElementById('count');
// let clickCount = 0;

// const countClick = () => {
//   clickCount += 1;
//   paragraphCount.innerHTML = clickCount;
// };

// btn.addEventListener('click', countClick);


const replaceWord = (word) => {
  let stringDetermined = 'Tryber, x aqui!'.split(' ');
  for (let index = 0; index < stringDetermined.length; index += 1) {
    if (stringDetermined[index] === 'x') {
      stringDetermined.splice(index, 1, word);
    }
  }
  return stringDetermined.join(' ');
};

// console.log(replaceWord('Wilson'));

const skills = ['React', 'Node', 'Jest', 'Heroku', 'Express'];

const concatString = (string) => {
  return `${string} Minhas cinco principais habilidades são: ${skills.sort().join(', ')}.`;
}

console.log(concatString(replaceWord('Wilson')));