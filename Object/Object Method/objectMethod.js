const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//console.log(person.fullName());

//Object.assgin Method
const person1 = {
  name: "Dom",
};

const newPerson = Object.assign({}, person1, {
  name: "John",
  age: 25,
});

//console.log(newPerson);

//object.defineProperty()
const person2 = {};

Object.defineProperty(person2, "name", {
  //   value: "Gokul",
  //   writable: false,
  get() {
    return new Date();
  },
});

//person2.name = "Sanjeev";

//console.log(person2.name);

const phone = {
  brand: "Google",
  model: "pixel 7a",
};

const phoneArr = Object.entries(phone);

//console.log(phoneArr);

const phone1 = [
  ["brand", "Google"],
  ["model", "pixel 7a"],
];

const phoneObj = Object.fromEntries(phone1);

//console.log(phoneObj);
const personName = {
  name: "Sanjay",
  age: 23,
};

Object.freeze(personName);

personName.age = 25;

//console.log(personName);
