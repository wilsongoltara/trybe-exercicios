// Parte 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//console.log(`Bem-vindo(a), ${info.personagem}`);

info.recorrente = 'Sim';
// console.log(info);

for (let key in info) {
  console.log(key);
}

