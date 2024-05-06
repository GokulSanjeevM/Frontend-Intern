//object

const userDetails = {
  name: "Gokul",
  age: 22,
  verified: true,
};

const newUser = userDetails;
//console.log(newUser);
newUser.name = "Sanjeev";

//console.log(newUser);
//console.log(userDetails); //it has affected both

//Delcaring clone object

const user1 = {
  name: "Gokul",
  age: 22,
  verified: true,
};

//Cloning object with spread operator
const cloneUser = { ...user1 };

//console.log(cloneUser);

cloneUser.name = "Sanjeev";
//console.log(cloneUser);
//console.log(user1);

//Delcaring object using assign method
const user2 = {
  name: "Gokul",
  age: 22,
  verified: true,
};

//cloning object with Object.assign()method

const objClone = Object.assign({}, user2);

// console.log(objClone);

objClone.name = "Sanjeev";
// console.log(objClone);
// console.log(user2);

//Delcaring object with JSON.parse()

const user3 = {
  name: "Gokul",
  age: 22,
  verified: true,
};

//Cloning object with JSON.parse() method
const cloneObj = JSON.parse(JSON.stringify(user3));

//console.log(cloneObj);

cloneObj.name = "Sanjeev";
// console.log(cloneObj);
// console.log(user3);

//structuredClone
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user);

console.log(user.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60; // change a property from one place
console.log(clone.sizes.width);
