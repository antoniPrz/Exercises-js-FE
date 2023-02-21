function hoist() {
  console.log(name);
  const name = 'Toni';
}

hoist();

//Output:
//line 2 ReferenceError: Cannot access 'name' before initialization
