function digitsOrLetters(str) {
  const num = str.match(/[0-9]/g);
  const alpha = str.match(/[a-z]/gi);

  if (num === null && alpha === null) return "tie";
  else if (num === null) return "letters";
  else if (alpha === null) return "digits";
  else if (num.length > alpha.length) return "digits";
  else if (alpha.length > num.length) return "letters";
  else return "tie";
}

console.log(digitsOrLetters("abc"));
console.log(digitsOrLetters("a1b2c3d"));
console.log(digitsOrLetters("1a2b3c4"));
console.log(digitsOrLetters("abc123!@#DEF"));
console.log(digitsOrLetters("H3110 W0R1D"));
console.log(digitsOrLetters("P455W0RD"));

// 22 SEPT 2025

// Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

// Digits consist of 0-9.
// Letters consist of a-z in upper or lower case.
// Ignore any other characters.
