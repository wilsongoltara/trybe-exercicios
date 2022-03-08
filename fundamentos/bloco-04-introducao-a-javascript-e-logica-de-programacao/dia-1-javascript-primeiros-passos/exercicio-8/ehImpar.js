const num1 = 10;
const num2 = 20;
const num3 = 30;
function ehImpar(num1, num2, num3) {
  if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(ehImpar(num1, num2, num3));