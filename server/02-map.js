const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const newArray = letters.map((item) => item + "++");
// const newArray = [];
//for (let index = 0; index < letters.length; index++) {
//  const element = letters[index];
//  newArray.push(element + "++");
//}
console.log(newArray);
console.log("new", newArray);

const n = [2, 4, 6, 8];
const nuwN = n.map((item) => item * 2);
console.log(nuwN);
