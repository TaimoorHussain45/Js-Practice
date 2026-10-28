let givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let requiredItem = 10;

function linearSearch(arr, item) {
  let loc = -1;
  let i = 0;

  while (i < arr.length && arr[i] != item) {
    i = i + 1;
  }

  if (i < arr.length) {
    loc = i;
  }

  return loc;
}

console.log(linearSearch(givenArray, requiredItem)); 