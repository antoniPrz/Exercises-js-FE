//Global scope

const variableEnGlobalScope = 'Variable Global';

function miFuncion() {
  console.log('Dentro del la función:', variableEnGlobalScope);
  const variableEnFunctionScope = 'variable function scope';
  console.log('Dentro del función:', variableEnFunctionScope);
}

miFuncion();

console.log('En el scope global', variableEnFunctionScope);
