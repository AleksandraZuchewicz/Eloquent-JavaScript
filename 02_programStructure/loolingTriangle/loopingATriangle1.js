// Taks 1
//Write a loop that makes seven calls to console.log to output the following triangle

// #
// ##
// ###
// ####
// #####
// ######
// #######

//it may be useful to know that you can find the length of a string by writting .lenght after it

// let abc = "abc"
//console.log(abc.length)
// > 3

var newItem = "";
for (var number = 0; number < 7; number++) {
  console.log((newItem = newItem + "#"));
}
