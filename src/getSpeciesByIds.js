const data = require("../data/zoo_data");
function getSpeciesByIds(...id) {
  const { species } = data;
  return species.filter((element) => id.includes(element.id));
}


module.exports = getSpeciesByIds;
