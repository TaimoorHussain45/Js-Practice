// new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Promise working1 ") 
//       user={name:"Taimoor Hussain",age:24,qualification:"Bs It"} 
//       resolve(user);
//     }, 1000);
// })
// .then((user)=>{
//     console.log(user)
//     return user.name;
// })
// .then((name)=>console.log(name))
// .catch((Err)=>console.log(Err))
// userData is already a Promise object not a function
const userData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false;
        let user={name:"Taimoor Hussain",age:24,qualification:"Bs It"} 
        if (!err) {
            resolve(user)
            
        }
        else{
            
            reject ('Error: Something went wrong')

        }
    },1000)
})

const handleData=async () => {
  
  try {
    let res=await userData;
    console.log(res)
  } catch (error) {
    console.log(error)
    
  }   
}
handleData();