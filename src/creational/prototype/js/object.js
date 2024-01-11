const personPrototype = {
  firstName: 'Felipe',
  lastName: 'Magalhães',
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

anotherPerson.fistName = 'Joana'; // Shadowing

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
