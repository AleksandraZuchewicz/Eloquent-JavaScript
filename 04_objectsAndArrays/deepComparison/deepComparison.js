let obj = {
  here: { is: "an" },
  object: 2
};

function deepEqual(obj, obj1) {
  if (obj === obj1) {
    return true;
  } else if (typeof (obj, obj1) != "object" || typeof (obj, obj1) == null) {
    return false;
  } else if (Object.keys(obj).length != Object.keys(obj1).length) {
    return false;
  } else {
    for (let key of Object.keys(obj)) {
      if (!Object.keys(obj).includes(key) || !deepEqual(obj[key], obj1[key])) {
        return false;
      }
    }
    return true;
  }
}

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
