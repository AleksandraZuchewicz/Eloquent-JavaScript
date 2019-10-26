// with For loop
function loop(value, test_function, update_function, body_function) {
  for (let i = value; test_function(value); value = update_function(value)) {
    body_function(value);
  }
}
// with While loop
function forr(value, test_function, update_function, body_function) {
  while (test_function(value)) {
    body_function(value);
    value = update_function(value);
  }
}
// with recursion function
function noLoop(value, test_function, update_function, body_function) {
  if (test_function(value)) {
    body_function(value);
    value = update_function(value);
    noLoop(value, test_function, update_function, body_function);
  }
}

noLoop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
