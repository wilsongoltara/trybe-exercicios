const valorCusto = 23.50;
const valorVenda = 30.00;
if (valorCusto > 0 && valorVenda > 0) {
  const impostoSobreOCusto = valorCusto * 0.2;

  const valorCustoTotal = valorCusto + impostoSobreOCusto;
  const lucro = valorVenda - valorCustoTotal;

  console.log(lucro);
} else {
  console.log('Valores inválidos');
}