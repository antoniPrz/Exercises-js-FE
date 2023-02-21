function hoist() {
  console.log(name);
  var name = 'Toni';
}

hoist();

//Output:
//line 2 undefined
