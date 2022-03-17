const data = require('../data/zoo_data');

// Funcao esta retornando um objeto com chave: child, adult, senior
function countEntrants(entrants) {
  return {
    // filter esta verificando quais elementos do parametro entra na condicao e armazena nas chaves do obj
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  };
}
// funcao calcula o preco de entrada de acordo com o parametro recebido
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { // a 1 condicao
    return 0;
  }

  const { prices } = data; // desestruturacao do objeto
  const resultCount = countEntrants(entrants); // constante esta recebendo a funcao acima
  const totalPriceChild = prices.child * resultCount.child; // preco multiplica a qtd passada pela funcao acima
  const totalPriceAdult = prices.adult * resultCount.adult; // preco multiplica a qtd passada pela funcao acima
  const totalPriceSenior = prices.senior * resultCount.senior; // preco multiplica a qtd passada pela funcao acima
  return totalPriceChild + totalPriceAdult + totalPriceSenior; // retorno é a soma das multiplicacoes
}

module.exports = { calculateEntry, countEntrants };
