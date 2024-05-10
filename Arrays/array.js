//Array methods
const ages = [32, 33, 16, 40, 10];

const filterAge = ages.filter((age) => {
  return age >= 18;
});

//console.log(filterAge);

const mapAge = ages.map((age) => {
  return age * 10;
});

//console.log(mapAge);

const findAge = ages.find((age) => {
  return age <= 18;
});

//console.log(findAge);

//forEach method
ages.forEach((age) => {
  //console.log(age);
});

//some method
const hasLessAge = ages.some((age) => {
  return age <= 18;
});

//console.log(hasLessAge);

//every method
const everyAge = ages.every((age) => {
  return age > 18;
});

//console.log(everyAge);

//Array destructuring
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

const [a, , c, ...restAlpha] = alphabet;

const newArray = [...alphabet, ...numbers];

// console.log(a);
//console.log(b);
// console.log(c);
// console.log(restAlpha);
//console.log(newArray);

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

//when the value is not returning the default value will be taken
const [sum, multiply, division = "no division"] = sumAndMultiply(2, 3);

//console.log(sum, multiply, division);

//Array destructuring in objects
const personOne = {
  name: "John",
  age: 25,
  address: {
    city: "Chennai",
    state: "Tamil Nadu",
  },
};
const personTwo = {
  name: "Dave",
  age: 28,
  address: {
    city: "Chennai",
    state: "Tamil Nadu",
  },
};

const {
  name: firstName,
  age,
  address: { state },
} = personTwo;

//console.log("Name:", firstName, " Age:", age, " State:", state);

const person = { ...personOne, ...personTwo };

//console.log(person);

//In function
// function printUser(user) {
//   console.log(`Name is: ${user.name}. Age is ${user.age}`);
// }

//object destructuring in function
function printUser({ name, age }) {
  console.log(`Name is: ${name}. Age is ${age}`);
}

printUser(personOne);
