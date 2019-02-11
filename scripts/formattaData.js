// Formattazione data in ISO
'use strict';

// Esportazione Modulo
module.exports = function formattaData(data) {
  const oggi = new Date(data);
  let month = '' + (oggi.getMonth() + 1);
  let giorno = '' + oggi.getDate();
  const anno = oggi.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (giorno.length < 2) giorno = '0' + giorno;

  return [anno, month, giorno].join('-');
};
