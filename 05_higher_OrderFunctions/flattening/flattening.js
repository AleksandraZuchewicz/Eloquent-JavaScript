let arrays = [[1, 2, 3], [4, 5], [6]];

let flat = arrays.reduce((total, amount) => {
  return total.concat(amount);
}, []);

console.log(flat);
