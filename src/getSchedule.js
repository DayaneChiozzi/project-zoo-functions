const data = require('../data/zoo_data');

const { hours, species } = data;
const arrayWeek = Object.keys(hours); // armazenando a chave do obj hours.no caso os dias week
const animals = species.map((element) => element.name); // armazenando a especie dos animais

function verifyHours(day) { // function para verificar as horas
  const arrayHours = Object.values(hours[day]); // const esta armazenando o valor da chave(obj)
  if (arrayHours[0] === 0) { // se o valor for 0
    return 'CLOSED'; // retorno vai se Closed
  }// se nao vai retornar a msg abaixo, com template literals para mostrar a hora dinamicamente
  return `Open from ${arrayHours[0]}am until ${arrayHours[1]}pm`;
}

function verifyexhibition(day) {
  // const esta armazenando o filtro feito no obj species, acessando a chave availability.includes esta acessando o array, o value da chave availability
  const arrayDays = species.filter((element) => element.availability.includes(day) === true);
  if (arrayDays.length === 0) { // se o tamanho do array for 0
    return 'The zoo will be closed!'; // retorno vai ser a msg left
  }// se ñ o retorno sera a especie
  return arrayDays.map((element) => element.name);
}
// qdo nao houver paramentro a funcao vai ser executada
function notParameter() {
  const hourAxhibition = arrayWeek.reduce((acc, element) => { // const armazena a funcao reduce, utilizada no array dos dias da week
    acc[element] = { // o acumulador, [no caso os dias da semana] recebe um obj officeHour e exhibition
      officeHour: verifyHours(element), // chamando a funcao
      exhibition: verifyexhibition(element), // chamando a funcao
    };
    return acc;
  }, {});
  return hourAxhibition;
}
// function resolve todas as condicoes solicitadas no requisito
function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) { // se o paramentro usado for o nome de uma especie...
    const animalsExhibition = species.find((element) => element.name === scheduleTarget); // function esta trazendo o 1 elemento, no caso a specie do animal
    return animalsExhibition.availability; // retorno é o array dos dias da semana que ele esta em exhibition
  }
  if (arrayWeek.includes(scheduleTarget)) { // se o paramentro passado for um dia da semana ...
    const result = {}; // const criada com obj vazio p armazenar o new obj
    result[scheduleTarget] = { // para criar a chave é usado o [] scheduleTarget nesse caso é o dia da week
      officeHour: verifyHours(scheduleTarget), // funcao chamada, dentro paramentro desta function
      exhibition: verifyexhibition(scheduleTarget), // funcao chamada, dentro paramentro desta function
    };
    return result;
  }
  return notParameter(); // chamando a funcao qdo nao tem paramentro ou o paramentro é !== animals our days.
}

module.exports = getSchedule;
