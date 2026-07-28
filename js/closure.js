// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     console.log(name); // use variable declared in the parent function
//   }
//    function inner() {
//     const userName="Taimoor Hussain";
//     displayName();
//     // use variable declared in the parent function
//   }
//       console.log(userName); 

//   inner();
  
// }
// init();

// const greet=function (greeting) {
//     return function (name){
//         console.log(`${greeting} ${name}`);
//     }
    
// }
// // const greetHey=greet('Hey')("Taimoor");
// // greetHey()
// greet('Hey')("Taimoor");
const greet= (greeting) => {
    return function (name){
        console.log(`${greeting} ${name}`);
    }
    
}
// greet('Hey')("Taimoor");
// greet('Hey',"Taimoor");
// const greetHey=greet('Hey')("Taimoor");
// // // greetHey()