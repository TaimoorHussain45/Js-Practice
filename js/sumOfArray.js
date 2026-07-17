let number = [1, 2, 3, 4, 5];
let total = 0;

// for (let index = 0; index < number.length; index++) {
//   total = number[index] + total;

//   console.log(total);
// }
// console.log(total);

//  Sum with Methods
// let num = 0;

// const sum = number.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   num,
// );
// console.log(sum);
                 // While//
let index = 0;
while (index < number.length) {
  total = number[index] + total;
  console.log("====================================");
  console.log(total);
  console.log("====================================");
  index++;
}
console.log(total);
