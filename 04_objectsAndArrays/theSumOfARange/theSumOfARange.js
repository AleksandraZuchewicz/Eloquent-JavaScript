// Step 1 - create range(start,end) function
function rangeStep1(start, end) {
  let array = [];
  array.push(start);
  array.push(end);
  return array;
}

function sum(array) {
  return array.reduce((a, b) => a + b);
}
console.log(sum(rangeStep1(5, 50)));

// Step 2 - modified range function

function range(start, end, step) {
  let array = [];
  if (typeof step === "undefined") {
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  } else if (typeof step !== "undefined" || step < 0) {
    let result = [];
    // array.unshift(start);
    for (let j = start; j >= end; j += step) {
      array.push(j);
    }
    return array;
  }
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
