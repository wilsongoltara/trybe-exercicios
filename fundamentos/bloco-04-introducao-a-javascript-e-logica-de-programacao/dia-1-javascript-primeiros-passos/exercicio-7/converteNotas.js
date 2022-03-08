function converteNotas(nota) {
  if (nota >= 0 && nota <= 100) {
    if (nota >= 90) {
      return "A";
    } else if (nota >= 80) {
      return "B";
    } else if (nota >= 70) {
      return "C";
    } else if (nota >= 60) {
      return "D";
    } else if (nota >= 50) {
      return "E";
    } else if (nota < 50) {
      return "F";
    }
  } else {
    return "Nota inválida";
  }
}

console.log(converteNotas(100));