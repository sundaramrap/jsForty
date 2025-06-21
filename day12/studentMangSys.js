console.log("Student Management System");

// make a object with object (name,age,grade)
//implement method to calculate the average grade.
/**
 *
 * @param {*} name
 * @param {*} age
 * @param {*} grade
 * 1. accepts student namee , age and grade , also calculate average
 */
function student(name, age, grade) {
  return {
    name: name,
    age: age,
    grade: grade,

    calcAvgGrade: function () {
      if (this.grade.length === 0) return 0;
      const total = this.grade.reduce((sum, grade) => sum + grade, 0);
      return total / this.grade.length;
    },

    getDetail: function () {
      const avg = this.calcAvgGrade().toFixed(2);
      console.log(
        ` Name : ${this.name}   Age: ${this.age}  Average Grade:${avg} `
      );
    },
  };
}

const user1 = student("Nella", 12, [54, 34, 56, 33, 55]);

console.log(user1.getDetail());
