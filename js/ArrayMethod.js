const users = [
  {
    id: 1,
    name: "Ali",
    email: "ali@gmail.com",
    age: 24,
    city: "Lahore",
    salary: 65000,
    role: "Developer",
    isOnline: true,
    isVerified: true,
    lastLogin: "2026-07-20",
    orders: 5,
    totalSpent: 125000,
    score: 92,
    grade: "A",
    tasksCompleted: 18,
    tags: ["React", "JavaScript", "Expo"],
  },
  {
    id: 2,
    name: "Ahmed",
    email: "ahmed@gmail.com",
    age: 19,
    city: "Karachi",
    salary: 40000,
    role: "Designer",
    isOnline: false,
    isVerified: false,
    lastLogin: null,
    orders: 2,
    totalSpent: 30000,
    score: 74,
    grade: "C",
    tasksCompleted: 8,
    tags: ["Figma", "UI"],
  },
  {
    id: 3,
    name: "Sara",
    email: "sara@gmail.com",
    age: 28,
    city: "Islamabad",
    salary: 90000,
    role: "Manager",
    isOnline: true,
    isVerified: true,
    lastLogin: "2026-07-23",
    orders: 10,
    totalSpent: 250000,
    score: 98,
    grade: "A",
    tasksCompleted: 25,
    tags: ["Management", "Leadership"],
  },
  {
    id: 4,
    name: "Ayesha",
    email: "ayesha@gmail.com",
    age: 22,
    city: "Lahore",
    salary: 55000,
    role: "Developer",
    isOnline: false,
    isVerified: true,
    lastLogin: "2026-07-18",
    orders: 1,
    totalSpent: 12000,
    score: 81,
    grade: "B",
    tasksCompleted: 15,
    tags: ["React Native", "TypeScript"],
  },
  {
    id: 5,
    name: "Usman",
    email: "usman@gmail.com",
    age: 31,
    city: "Faisalabad",
    salary: 120000,
    role: "Admin",
    isOnline: true,
    isVerified: true,
    lastLogin: "2026-07-22",
    orders: 15,
    totalSpent: 450000,
    score: 89,
    grade: "A",
    tasksCompleted: 30,
    tags: ["Node", "MongoDB", "Express"],
  },
  {
    id: 6,
    name: "Hina",
    email: "hina@gmail.com",
    age: 26,
    city: "Karachi",
    salary: 70000,
    role: "QA",
    isOnline: false,
    isVerified: false,
    lastLogin: "2026-07-15",
    orders: 4,
    totalSpent: 85000,
    score: 77,
    grade: "B",
    tasksCompleted: 12,
    tags: ["Testing", "Automation"],
  },
  {
    id: 7,
    name: "Bilal",
    email: "bilal@gmail.com",
    age: 18,
    city: "Multan",
    salary: 30000,
    role: "Intern",
    isOnline: true,
    isVerified: false,
    lastLogin: null,
    orders: 0,
    totalSpent: 0,
    score: 68,
    grade: "D",
    tasksCompleted: 3,
    tags: ["HTML", "CSS"],
  },
  {
    id: 8,
    name: "Fatima",
    email: "fatima@gmail.com",
    age: 27,
    city: "Islamabad",
    salary: 85000,
    role: "Developer",
    isOnline: true,
    isVerified: true,
    lastLogin: "2026-07-21",
    orders: 7,
    totalSpent: 180000,
    score: 95,
    grade: "A",
    tasksCompleted: 22,
    tags: ["React", "Next.js"],
  },
  {
    id: 9,
    name: "Hamza",
    email: "hamza@gmail.com",
    age: 35,
    city: "Lahore",
    salary: 150000,
    role: "CTO",
    isOnline: false,
    isVerified: true,
    lastLogin: "2026-07-19",
    orders: 25,
    totalSpent: 800000,
    score: 99,
    grade: "A",
    tasksCompleted: 40,
    tags: ["Architecture", "Cloud"],
  },
  {
    id: 10,
    name: "Zain",
    email: "ahmed@gmail.com", // Duplicate email for practice
    age: 23,
    city: "Peshawar",
    salary: 48000,
    role: "Support",
    isOnline: true,
    isVerified: false,
    lastLogin: "2026-07-17",
    orders: 3,
    totalSpent: 45000,
    score: 72,
    grade: "C",
    tasksCompleted: 10,
    tags: ["Customer Support"],
  },
];
//Get the names of all users.

// users.map((element,index)=> console.log(` User Name is ${element.name}\n `));
// Get the email addresses of all users.
// users.map((element,index)=>console.log(`${element.name} email is ${element.email}`))
//Find all users who are older than 18.
// let adultUsers= users.filter((element)=> element.age > 18);
// console.log(`Adult users is ${adultUsers}`)
// console.log("Adult users:", adultUsers);
// users.map((element,index)=> console.log(` adultUser is ${element.age>18}\n `));
//Find all verified users.
// let verifiedUser=users.filter((element)=>element.isVerified===true);
// console.log("verified user",verifiedUser);
// Find all users from Lahore.
// let usersFromLahore=users.filter((element)=> element.city==="lahore"||element.city==="Lahore");
// console.log("users From lahore are ",usersFromLahore.city)
//                     Find the user with ID 5           //   
// let specificUser=users.find((element)=>element.id===5);
// console.log(specificUser);
// let specificUser=users.filter((element)=>element.id===5);
// console.log(specificUser);

// const firstLoginUser = {};
// const sumWithInitial = users.reduce(
//   (accumulator, currentValue) => accumulator.lastLogin >currentValue.lastLogin,
//   firstLoginUser,
// );

// console.log(sumWithInitial);
// const latestUser = users.reduce((accumulator, currentValue) => {
//   return accumulator.lastLogin < currentValue.lastLogin
//     ? accumulator
//     : currentValue;
// });

// console.log(latestUser);
//  let firstOnlineUser=users.find((element)=>element.isOnline);
//  console.log(firstOnlineUser);

//  let adminData=users.find((element,index)=>element.role==="admin"||element.role==="Admin");
//  console.log("Admin ",adminData);
//  let totalSalary=0;
//  let calculateSalary=users.reduce((acc,curr)=>{return acc+curr.salary},totalSalary)
//  console.log("Total salary is",calculateSalary);
//  let age=0;
//   let totalAge=users.reduce((acc,curr)=>{return (acc+curr.age)},age)
//   let totalUsers=users.length
//   let averageDate=totalAge/totalUsers;
//   console.log("averageDate",averageDate,totalAge,totalUsers);
//   let onlineUsers=users.filter((element)=>element.isOnline);
//   console.log("Total online users",onlineUsers.length)
// let highPaidUsers=users.reduce((acc,crr)=> acc.city === crr.city,[] )
// console.log(highPaidUsers);
// let UserCities=users.map((element)=>   element.name}  ${element.city}`)
// console.log(UserCities);
function isCherries(curr,prev) {
   const city= curr.city === prev.city;
   return city;
}
// let allUsers=users.sort((acc,crr)=>acc.city===crr.city)
// console.log(allUsers);
// console.log(users.find((element,index)=>isCherries(element,element{index+1})));
 let highPaidUsers=users.reduce(isCherries);
 console.log(highPaidUsers);
