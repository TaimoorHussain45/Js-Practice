// let value =275;
// let value =40;
let value =430;
let tip=0;
tip =  value >= 50 && value <= 300 ? value*0.15 : value*0.25;
let totalBill=value+tip;
console.log(` The bill was ${value} ,  the Tip was  ${tip} and total value was ${totalBill}`);