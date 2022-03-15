const majorWord = ((arrayOfWords) => {
  let major = arrayOfWords[0];
  for (let word of arrayOfWords) {
    if (word.length > major.length) {
      major = word;
    }
  }
  return major;
});

const minorWord = ((arrayOfWords) => {
  let minor = arrayOfWords[0];
  for (let word of arrayOfWords) {
    if (word.length < minor.length) {
      minor = word;
    }
  }
  return minor;
});

let array = ['java', 'javascript', 'python', 'html', 'css'];
console.log(minorWord(array));