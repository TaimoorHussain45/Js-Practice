const students = [
  { name: "Ali", score: 45 },
  { name: "Sara", score: 75 },
  { name: "Omar", score: 85 },
  { name: "Zara", score: 60 },
];
// const filterStudents = students.filter((Element) => Element.score > 60);
// console.log(filterStudents);
let studentsName = [];
for (let index = 0; index < students.length; index++) {
  studentsName[index] = students[index].name.toUpperCase();
}
console.log(studentsName);
