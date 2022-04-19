// Request 1
const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeGenerator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeGenerator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};


//Request 2
const hasWon = (numberRandom, bet) => numberRandom === bet ? 'Parabéns você ganhou!' : 'Tente Novamente!' ;

const resultDraw = (bet, hasWon) => {
  const numberRandom = Math.floor((Math.random() * 5) + 1);
  return hasWon(numberRandom, bet);
};
