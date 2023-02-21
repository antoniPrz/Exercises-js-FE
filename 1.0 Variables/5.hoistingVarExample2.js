function hoist() {
  console.log(name);
  var name;
}

hoist();

//Output:
//line 2 undefined
