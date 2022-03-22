function verificaPalindrome(string) {
  let reversed = string.split('').reverse().join('');
  if (string === reversed) {
    return true;
  }
  return false;
}

function indexHighestValue(integers) {
  let highestValue = integers.reduce((a,b) => {
    return Math.max(a, b);
  });

  let indexValue = integers.indexOf(highestValue);
  return indexValue;
}

function indexLowerValue(integers) {
  let lowerValue = integers.reduce((a,b) => {
    return Math.min(a, b);
  });

  let indexValue = integers.indexOf(lowerValue);
  return indexValue;
}
