function hoist() {
  console.log(name);
  let name = 'Toni';
}

hoist();

//Output:
//line 2 ReferenceError: Cannot access 'name' before initialization
