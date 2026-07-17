function findMissingNumber(arr) {
  let naturalNumber = [1, 2, 3, 4, 5, 6, 7, 8];
  let element = 0;
  for (let index = 0; index < arr.length; index++) {
    if (!arr.includes(naturalNumber[index])) {
      element = naturalNumber[index];

      console.log("====================================");
      console.log(element);
      console.log("====================================");
    }
  }
}
findMissingNumber([1, 2, 3, 5]);
