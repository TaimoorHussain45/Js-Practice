function fibonacci(number) {
    let fabonicSeriesArray = [0, 1];
for (let i = 2; i < number; i++) {
  fabonicSeriesArray[i] = fabonicSeriesArray[i - 1] + fabonicSeriesArray[i - 2];
}
console.log(fabonicSeriesArray);
}
fibonacci(15)

