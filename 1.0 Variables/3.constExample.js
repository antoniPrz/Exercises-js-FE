function addNumbers() {
  const a = 10;
  const b = 20;
  const flag = true;
  if (flag) {
    const sum = a + b;
    console.log('Inside if blok ', sum); //Output :Inside if blok with var 30
  }
  console.log('Outside if block ', sum); //Output :Outside if blok with var 30
}

addNumbers();

//Outputs:
// lienea 7 Inside if blok  30
// linea 9 ReferenceError: sum is not defined
