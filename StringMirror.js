function isMirror(str1, str2) {
  const splitSent = str1.split(" ").reverse();
  const mySt2 = str2.match(/[a-zA-Z]+/g).join("");

  let st1 = [];

  for (const el of splitSent) {
    const splitEl = el.split("");
    const rev = splitEl.reverse();
    for (const child of rev) {
      st1.push(child);
    }
  }

  const mySt = st1.join("");

  if (mySt === mySt2) {
    console.log(mySt, mySt2, true);
    return true;
  } else {
    console.log(mySt, mySt2, false);
    return false;
  }
}

isMirror("helloworld", "helloworld");
isMirror("Hello World", "dlroW olleH");
isMirror("RaceCar", "RaceCar");
isMirror("Mirror", "rorrim");
isMirror("Hello World", "dlroW-olleH");
isMirror("Hello World", "!dlroW !olleH");
// 23 SEPT 2025

// Given two strings, determine if the second string is a mirror of the first.

// A string is considered a mirror if it contains the same letters in reverse order.
// Treat uppercase and lowercase letters as distinct.
// Ignore all non-alphabetical characters.
