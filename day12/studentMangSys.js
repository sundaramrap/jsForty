console.log("Student Management System");

// make a object with object (name,age,grade)
//implement method to calculate the average grade.
/**
 *
 * @param {*} name
 * @param {*} age
 * @param {*} grade
 */

/// student mangement system

/**
 * 1. take name, age and grades
 * 2. make a fucntion to calculate avg marks
 * 3. make a fucntion to get the student information
 */

function studentDetail(sname, sage, smarks) {
  return {
    Name: sname,
    Age: sage,
    grade: smarks,

    avgGrade: function () {
      const total = this.grade.reduce((sum, marks) => sum + marks, 0);
      return total / this.grade.length;
    },
    getDetail: function () {
      const marks = this.avgGrade();

      console.log(`Name: ${this.Name} Age:${this.Age} Percentage:${marks}%`);
    },
  };
}

const user1 = studentDetail("Namjoon", 14, [98, 99, 87, 78, 88]);
console.log(user1.getDetail());
