function titleCase(sentence) {
  let title = sentence[0].toUpperCase() + sentence.substring(1);

  return title;
}

function convertArrayOfCapital(strings) {
  const arrSplit = strings.split(" ");
  let arrOfString = [];
  for (let index = 0; index < arrSplit.length; index++) {
    const element = arrSplit[index];
    // console.log(element);
    arrOfString.push(titleCase(element));
    // console.log(titleCase(element));
  }
  return arrOfString.join("");
}

console.log(convertArrayOfCapital("this text"));
// titleCase("this text");
