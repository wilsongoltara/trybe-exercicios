const angulo1 = 50;
const angulo2 = 80;
const angulo3 = 50;
let resultado = false;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  if (angulo1 + angulo2 + angulo3 === 180) {
    resultado = true;
    console.log(resultado);
  } else {
    console.log(resultado);
  }
} else {
  console.log("Ângulos invalidos");
}
