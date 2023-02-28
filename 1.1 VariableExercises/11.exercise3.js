// var a = 10;
// function exercise() {
//   a = 20;
//   console.log(a);
// }

// exercise();
// console.log(a);

let b = 10;

function exercise2() {
  let b;
  b = 20;
  return b;
}

// exercise2();

let newB = exercise2();
b = newB;
console.log(b);
