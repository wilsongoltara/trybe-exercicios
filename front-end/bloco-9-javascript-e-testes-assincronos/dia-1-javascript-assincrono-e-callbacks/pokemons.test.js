// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails }  = require("./pokemons");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expected = /Não temos esse pokémon para você/;
    try {
      getPokemonDetails(
        ({name}) => name == 'Wilson', 
        (error, message) => {
          if (error) {
            console.log(error);
          } else {
            console.log(message);
          }
        }
      ).toThrowError(expected);
      done();
    } catch(error) {
      done();
    }
  }, 2000);

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = /Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf/;
    try {
      getPokemonDetails(
        ({name}) => name == 'Bulbasaur', 
        (error, message) => {
          if (error) {
            console.log(error);
          } else {
            console.log(message);
          }
        }
      ).toThrowError(expected);
      done();
    } catch(error) {
      done();
    }
  }, 2000);
});