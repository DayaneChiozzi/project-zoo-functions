const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const manager = isManager(managerId);
  if (!manager) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const resultManager = data.employees.filter((element) => element.managers.includes(managerId));
  const nameSubordinate = resultManager
    .map((element) => `${element.firstName} ${element.lastName}`);
  return nameSubordinate;
}

module.exports = { isManager, getRelatedEmployees };
