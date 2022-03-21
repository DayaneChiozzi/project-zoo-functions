const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  // const recebe o 1 elemento.id da const employees e compara o id paramentro
  const employeesResult = employees.find((element) => element.id === id);
  // const recebe o 1 elemento.id da const species e compara com a const acima, o 1 indice de responsibleFor
  const animalFirst = species.find((element) => element.id === employeesResult.responsibleFor[0]);
  // const recebe os residents da const acima e ordena do maior para o menor
  const residentsSorted = animalFirst.residents.sort((a, b) => b.age - a.age);
  // para acessar apenas o valor da const residentsSorted[1 indice] foi utilizado o obj.values
  return Object.values(residentsSorted[0]);
}

module.exports = getOldestFromFirstSpecies;
