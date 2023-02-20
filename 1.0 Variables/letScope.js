//Var is function scope

let sum = 100; // Se declara y se asigna un valor
let sum2 = 100; // Se declara y se asigna un valor

function addNumbersVar() {
  let a = 10;
  let b = 20;
  let flag = true;
  if (flag) {
    sum = a + b; // Se reasigna valor
    let sum2 = a + b; // Se declara de nuevo lo que la hace una variable nueva y se asingna valor
    console.log('Inside if blok with let sum', sum);
    console.log('Inside if blok with let sum2', sum2);
  }
  console.log('Outside if block let sum', sum);
  console.log('Outside if block let sum2', sum2);
}

addNumbersVar();

console.log('Outside the function sum', sum);
console.log('Outside the function sum2', sum2);
