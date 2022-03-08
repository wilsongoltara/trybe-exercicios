const num1 = 11;
const num2 = 12;
const num3 = 10;
let maior = 0;

if (num1 > num2 && num1 > num3) {
  maior = num1;
} else if (num2 > num1 && num2 > num3) {
  maior = num2;
} else {
  maior = num3;
}
console.log(maior);