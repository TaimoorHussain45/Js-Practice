// const Data ={
//     name:"Taimoor",
//     email:"testuser@gmail.com",
//     //Arrow function does not take this
//     // userData:()=>{
//     //     console.log(`My Name is ${this.name}.My email is${this.email}`)
//     // }
//      userData:function(){
//         console.log(`My Name is ${this.name}.My email is${this.email}`)
//     }
// }
// Data.userData();console.log(typeof this)
//  function data(){
//         console.log(this)
//     }
//     data()
const data=function name() {
    console.log("working")
    
}
console.log(typeof data);