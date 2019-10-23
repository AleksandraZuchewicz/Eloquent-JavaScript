function every2(array, test) {
  return !array.some(elementOfAnArray => !test(elementOfAnArray));
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true

function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    let elementOfAnArray = array[i];
    if (!test(elementOfAnArray)) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
