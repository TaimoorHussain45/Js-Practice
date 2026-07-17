let data = "Hello";
let newArray2 = data.split("");
let a = 0;
for (let index = 0; index < data.length; index++) {
  if (
    newArray2[index] === "a" ||
    newArray2[index] === "e" ||
    newArray2[index] === "i" ||
    newArray2[index] === "o" ||
    newArray2[index] === "u"
  ) {
    a++;
  }
}
console.log("Total vowel", a);
