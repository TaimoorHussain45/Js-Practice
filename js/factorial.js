// let number = 20;

// console.log(number);

function factorial(number) {
  for (let index = number - 1; index > 0; index--) {
    number = number * index;
  }
  console.log(number);
}
factorial(4);
