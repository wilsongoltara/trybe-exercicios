function calculaSalarioLiquido(salarioBruto) {
  let salarioMenosINSS = salarioBruto - calculaINSS(salarioBruto);
  let salarioLiquido = salarioMenosINSS - calculaImpostoRenda(salarioMenosINSS);
  return salarioLiquido;
}

function calculaINSS(salarioBruto) {
  let aliquotaINSS = 0;
  
  if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.8;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.9;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
  } else {
    aliquotaINSS = 570.88;
  }
  
  return aliquotaINSS;
}

function calculaImpostoRenda(salarioBruto) {
  let aliquotaIR = 0;

  if (salarioBruto <= 1903.98) {
    aliquotaIR = 0;
  } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
    aliquotaIR = (salarioBruto * 0.075) - 142.8;
  } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
    aliquotaIR = (salarioBruto * 0.015) - 354.8;
  } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
    aliquotaIR = (salarioBruto * 0.0225) - 636.13;
  } else {
    aliquotaIR = (salarioBruto * 0.0275) - 869.36;
  }
  
  return aliquotaIR;
}
console.log(calculaSalarioLiquido(3000));