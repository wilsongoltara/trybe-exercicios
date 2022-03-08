const num1 = 11;
const num2 = 23;
const num3 = 35;
function ehImpar(num1, num2, num3) {
  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(ehImpar(num1, num2, num3));