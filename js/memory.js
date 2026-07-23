// let FirstName="Taimoor";
// console.log(FirstName);
// let Name=FirstName;
// console.log("copy",Name);
// Name="Taimoor hussain";
// console.log(Name);

let Data={
    Name:"Taimoor",
    age:18,
}
console.log("Data",Data.Name);
let userData=Data;
userData.Name="Taimoor hussain";

console.log("change Data",userData.Name,Data.Name);