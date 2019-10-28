// [a,b,c]
//  ^ ^ ^
//  0 1 2
function arrayToList(array) {
  let list = {
    value: array[array.length - 1],
    rest: null
  };
  for (let i = array.length - 2; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

function arrayToList2(array) {
  let list;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list === undefined ? null : list
    };
  }
  return list;
}

function arrayToList3(array) {
  if (array.length === 0) {
    return null;
  }
  return (list = {
    value: array[0],
    rest: arrayToList3(array.slice(1, array.length))
  });
}

console.log(arrayToList3(["a", "b", "c"]));

// function prepend(element, list) {
//
// }
// function nth(list, number) {}

// function listToArray(list) {
//   return array;
// }
