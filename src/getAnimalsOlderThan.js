const data = require('../data/zoo_data');

// console.log(data);
function getAnimalsOlderThan(animal, age) {
  const resultSpecie = data.species.find((element) =>
    animal.includes(element.name));

  return resultSpecie.residents.every((element) => element.age >= age);
}

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
