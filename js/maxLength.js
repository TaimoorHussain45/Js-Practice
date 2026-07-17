const data = "The quick brown fox jumps over the lazy dog";

const sentence = data.split(" ");
let maxWord = data[0];
for (let i = 0; i < sentence.length - 1; i++) {
  if (sentence[i].length > maxWord.length) {
    maxWord = sentence[i];
  }
}
console.log( maxWord);

