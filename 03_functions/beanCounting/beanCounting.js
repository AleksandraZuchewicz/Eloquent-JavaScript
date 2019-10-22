// Count all "B" in a string
function countBs(string) {
  let BCounter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "B") {
      BCounter++;
    }
  }
  return BCounter;
}

console.log(countBs("BBCB"));

// Count all "k" in a string
function countChar(string, char) {
  let letterCounter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == char) {
      letterCounter++;
    }
  }
  return letterCounter;
}
console.log(countChar("kakkerlak", "k"));
