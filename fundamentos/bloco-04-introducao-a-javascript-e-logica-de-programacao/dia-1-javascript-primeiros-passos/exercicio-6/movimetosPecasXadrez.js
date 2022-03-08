function movimentosPecasXadrez(peca) {
  let movimentos = null;    
  peca = peca.toLowerCase();
  switch (peca) {
    case 'peão':
      movimentos = 'frente e captura na diagonal';
      break;
    case 'bispo':
      movimentos = 'diagonal';
      break;
    case 'cavalo':
      movimentos = 'em L';
      break;
    case 'torre':
      movimentos = 'horizontalmente e verticalmente';
      break;
    case 'rainha':
      movimentos = 'diagonal, horizontalmente e verticalmente';
      break;
    case 'rei':
      movimentos = 'diagonal, horizontalmente e verticalmente nas casas adjacentes';
      break;
    default:
      movimentos = 'peça inválida';
      break;
  }
  return movimentos;
}

let result = movimentosPecasXadrez('REI');
console.log(result);