//Var, let, const

//Scope variable

//Var is function scope

var sum = 100; // Se declara y se asigna un valor
var sum2 = 100; // Se declara y se asigna un valor

function addNumbersVar() {
  var a = 10;
  var b = 20;
  var flag = true;
  if (flag) {
    sum = a + b; // Se reasigna valor
    var sum2 = a + b; // Se re-declara
    console.log('Inside if blok with var sum', sum);
    console.log('Inside if blok with var sum2', sum2);
  }
  console.log('Outside if block var sum', sum);
  console.log('Outside if block var sum2', sum2);
}

addNumbersVar();

console.log('Outside the function sum', sum);
console.log('Outside the function sum2', sum2);

function addNumbersConst() {
  const a = 10;
  const b = 20;
  const flag = true;
  if (flag) {
    const sum = a + b;
    console.log('Inside if blok with const', sum);
  }
  console.log('Outside if block const', sum);
}

addNumbersConst();

function addNumbersLet() {
  const a = 10;
  let b = 20;
  let flag = true;
  if (flag) {
    let sum = a + b;
    console.log('Inside if blok with let', sum);
  }
  console.log('Outside if block let', sum);
}

addNumbersLet();
