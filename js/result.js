const students = [
  { name: "Ali", score: 45 },
  { name: "Sara", score: 75 },
  { name: "Omar", score: 85 },
  { name: "Zara", score: 60 },
];
const filterStudents = students.filter((Element) => Element.score > 60);
console.log(filterStudents);
let studentsName = [];
for (let index = 0; index < filterStudents.length; index++) {
  studentsName[index] = filterStudents[index].name;
}
console.log(studentsName);
