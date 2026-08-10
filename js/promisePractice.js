new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise working1 ") 
      user={name:"Taimoor Hussain",age:24,qualification:"Bs It"} 
      resolve(user);
    }, 1000);
})
.then((user)=>{
    console.log(user)
    return user.name;
})
.then((name)=>console.log(name))
.catch((Err)=>console.log(Err))