const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}
console.log("for", newArray);

const repuesta = elements.concat(otherElements);
console.log("concat", repuesta);

const rta3 = [...elements, ...otherElements];
console.log("spread", rta3);

const rta4 = [elements, ..."random"];
console.log("array", rta4);

elements.push(...otherElements);
console.log("push", elements);
