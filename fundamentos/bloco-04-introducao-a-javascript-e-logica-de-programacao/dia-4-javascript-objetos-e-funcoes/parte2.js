function verificaPalindrome(string) {
  let reversed = string.split('').reverse().join('');
  if (string === reversed) {
    return true;
  }
  return false;
}

function indexHighestValue(integers) {
  let highestValue = integers[0];
  let indexValue = 0;
  for (let index in integers) {
    if((integers[index]) > highestValue) {
      indexValue = parseInt(index);
      highestValue = integers[index];
    }
  }
  return indexValue;
}

function indexLowerValue(integers) {
  let lowerValue = integers[0];
  let indexValue = 0;
  for (let index in integers) {
    if((integers[index]) < lowerValue) {
      indexValue = parseInt(index);
      lowerValue = integers[index];
    }
  }
  return indexValue;
}

console.log(indexHighestValue([2, 4, 6, 7, 10, 0, -3]))