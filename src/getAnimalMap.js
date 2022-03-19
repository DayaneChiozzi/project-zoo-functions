const data = require('../data/zoo_data');
//mapear as especies
function getAnimalMap(options) {
  const {species} = data

 const mapear = species.map((element) => element === element.location)
 
 console.log(mapear)

console.log(getAnimalMap());

module.exports = getAnimalMap;