// // function saqure(num) {
// //     return num*num;
// // }
// // saqure.power=5;
// // console.log(saqure(5))
// // console.log(saqure.power)
// // console.log(saqure.prototype)
// // function multipleBy5(num){

// //     return num*5
// // }

// // multipleBy5.power = 2

// // console.log(multipleBy5(5));
// // console.log(multipleBy5.power);
// // console.log(multipleBy5.prototype);

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)

// // chai.printMe()
// // tea.printMe()
// let age=98;
// console.log(age.prototype)


// /*

// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// */

function createUser(name,email,birthYear) {
      this.name=name;
      this.email=email;
      this.birthYear=birthYear;
} 
const data=new createUser("Taimoor","taimoorhussain@gmail.com",2002);
const obj2=new createUser("ali","ali@gmail.com",2004)
// console.log(obj2,data)
// The new keyword performs four actions:

// Creates a new empty object ({}).
// Sets its prototype to createUser.prototype.
// Binds this to that new object and executes the function.
// Automatically returns the new object (unless the constructor explicitly returns another object).
// function userData(name,email) {
   
// } 
// const obj3= new userData("Name","email",2001)
// console.log(obj3) 
// createUser.prototype.calAge=function () {
//    console.log(2026-this.birthYear);
      
// }
// data.calAge();
 function Car(make,speed) {
   this.make=make;
   this.speed=speed
      
 }
 Car.prototype.accelerate=function () {
    console.log(`Car is going with speed of ${this.speed+10} kmh`);
      
 }
 Car.prototype.brake=function () {
console.log( `Car is going with speed of ${this.speed-5} kmh`);

      
 }
 const car1=new Car("Bmw",120);
 const car2=new Car("Honda",150)
 console.log(car1);
//  console.log(car2)
 car1.accelerate();
 car1.brake();
 car2.accelerate();
 car2.brake();

