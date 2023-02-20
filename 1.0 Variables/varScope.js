//Var is function scope

var sum = 100; // Se declara y se asigna un valor
var sum2 = 100; // Se declara y se asigna un valor
var sum = 200;
var sum2 = 200;

function addNumbersVar() {
  var a = 10;
  var b = 20;
  var flag = true;
  if (flag) {
    sum = a + b; // Se reasigna valor
    var sum2 = a + b; // Se re-declara
    var sum3 = a + b; // Se declara por primera vez y se inicaliza
    console.log('Inside if blok with var sum', sum);
    console.log('Inside if blok with var sum2', sum2);
    console.log('Inside if blok with var sum3', sum3);
  }
  console.log('Outside if block var sum', sum);
  console.log('Outside if block var sum2', sum2);
  console.log('Outside if block var sum3', sum3);
}

addNumbersVar();

console.log('Outside the function sum', sum);
console.log('Outside the function sum2', sum2);
console.log('Outside the function sum3', sum3);
