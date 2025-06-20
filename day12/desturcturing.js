console.log("Learn destructure");
const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Maths", "English", "EVS"],
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: {
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

//adding new var meal
const { name, age, meal = "bread" } = student;

console.log(name, age, meal);

//can new varibale  e added with bydamic vvalue? Yes

const { subjects, diffSubjects = subjects.length } = student;
console.log(diffSubjects);

//alais name , where there is chances of variable name conflict.
//here JScript does not make variable for std , but rather alias name standard.
const { std: standard } = student;
console.log(standard);

//Nested Obj Destructure

const {
  address: { zip },
} = student;
console.log(zip);

//desturctring to function parameter
function studentEmail({ parents: { email } }) {
  console.log(email);
}
studentEmail(student);

//function returning obj
//here get student returns an object
const getStudent = () => {
  return {
    name: "John Williamson",
    age: 9,
    std: 3,
    subjects: ["Maths", "English", "EVS"],
    parents: {
      father: "Brown Williamson",
      mother: "Sophia",
      email: "john-parents@abcde.com",
    },
    address: {
      street: "65/2, brooklyn road",
      city: "Carterton",
      country: "New Zealand",
      zip: 5791,
    },
  };
};

//required name and subject
// const anotherStuden = getStudent();

// const anotherName = anotherStuden.name;
// const anotherSubject = anotherStuden.subjects;
// console.log(anotherName, anotherSubject);

const { name: name1, subjects: sub1 } = getStudent();
console.log(name1, sub1);

//desturcting wihtin the LOOP
