//Reversing an array by creating new array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseArray(array) {
  let arrayLength = array.length;
  let reversedArray = [];
  for (let i = 0; i < arrayLength; i++) {
    let takingelement = array.pop(i);
    reversedArray.push(takingelement);
  }
  return reversedArray;
}

//Reversing an array with method
function reverseArrayInPlaceMethod(array) {
  return array.reverse();
}

console.log(reverseArray(array));
var a = [3, 5, 7, 8];
console.log(reverseArray(a));
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlaceMethod(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
