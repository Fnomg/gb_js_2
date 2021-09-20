// es5
function Person (name = "user", age = 18) {
  this.name = name;
  this.age = age;
  // this.calcYear = function () {
  //   return new Date().getFullYear() - this.age
  // }
}

Person.prototype.calcYear = function () {
  return new Date().getFullYear() - this.age
}

let vasya = new Person('vasya', 30)
console.log(vasya.calcYear())

function Teacher (name, age, subject) {
  Person.call(this, name, age)
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher;
let igor = new Teacher('Igor', 45, 'English')
console.log(igor)



console.log(igor.calcYear())

// es6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  calcYear() {
    return new Date().getFullYear() - this.age;
  }
}
let alex = new Person('Alex', 32)
console.log(alex.calcYear())

class Teacher extends Person {
  constructor(name, age, subj) {
    super(name, age);
    this.subj = subj;
  }
  static tripple(num) {
    return num * 3
  }
}

let ann = new Teacher('Ann', 27, 'programmer')
console.log(ann.calcYear())
console.log(ann)
console.log(alex)

console.log(ann)