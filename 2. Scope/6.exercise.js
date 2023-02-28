const a = 10;

function exampleSix() {
  const b = 20;
  console.log(a, b);
  function inner() {
    const c = 30;
    console.log(a, b, c);
  }
  inner();
}

exampleSix();
