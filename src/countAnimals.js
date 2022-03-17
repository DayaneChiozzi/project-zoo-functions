const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) { // se, sem paramentro
    const qtdObject = {};// abro uma const com obt vazio
    // forEach percorre o obj species e armazena no obj vazio todas as especies(chave) e qtdes de especies(value)
    data.species.forEach((element) => { qtdObject[element.name] = element.residents.length; });
    return qtdObject; // o retorno é a const do obj'vazio'
  }
  if (!animal.sex) { // se o parametro for apenas a specie
    // o find percorre o obj species e busca o nome da especie
    const result = data.species.find((element) => element.name === animal.specie);
    const { residents } = result; // desistruturando o obj p acessar o array residents
    return residents.length;// retorno é o tamanho do array residents
  }
  if (animal.sex) { // se o paramentro houver tbem sex
    const result = data.species.find((element) => element.name === animal.specie);
    const { residents } = result;
    const qtd = residents.filter((element) => element.sex === animal.sex);
    return qtd.length; // retorno vai ser o tamanho do array da qtde do sexo da especie dada no parametro
  }
}

module.exports = countAnimals;
