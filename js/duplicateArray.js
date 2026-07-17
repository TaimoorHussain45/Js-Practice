let Array1 = [1, 2, 2, 3, 4, 4, 5];

element = 0;
let Array2 = [];
for (let index = 0; index < Array1.length; index++) {
  if (element !== Array1[index]) {
    element = Array1[index];
    Array2.push(element);
  }
}
console.log(Array2);
