const name=()=>{
console.log("Working");
let userName=prompt("Please Enter your Name");
alert(`Your name is  ${userName}`);
let age=confirm("Are you 18+");
let confirmAge="";
if (age)
{
confirmAge="You can yo use these Website";
}
else {
    confirmAge="You cannot  use these Website because your not 18+";
}
alert(confirmAge);
}

const inputButton=document.getElementById("button");
inputButton.addEventListener("click",name)