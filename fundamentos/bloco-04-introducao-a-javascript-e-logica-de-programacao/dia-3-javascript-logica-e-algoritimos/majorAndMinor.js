const majorWord = ((arrayOfWords) => {
  let major = arrayOfWords[0];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > major.length) {
      major = arrayOfWords[i];
    }
  }
  return major;
});
