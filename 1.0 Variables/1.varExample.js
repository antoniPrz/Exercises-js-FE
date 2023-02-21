function addNumbersVar() {
  var a = 10;
  var b = 20;
  var flag = true;
  if (flag) {
    var sum = a + b;
    console.log('Inside if blok ', sum); //Output :Inside if blok with var 30
  }
  console.log('Outside if block ', sum); //Output :Outside if blok with var 30
}

addNumbersVar();

//Outputs:
// lienea 7 Inside if blok  30
// linea 9  Outside if block 30
