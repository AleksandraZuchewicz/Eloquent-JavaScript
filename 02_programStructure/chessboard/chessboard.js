//Solution 1
let string1 = " # # # # \n# # # # \n # # # # \n# # # # \n # # # # \n# # # # \n";

//Solution 2
let board = "";
let length = 8;
function createChessboard() {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if ((i + j) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
}
createChessboard();

console.log(board);
