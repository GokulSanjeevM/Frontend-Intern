//Reference
//Primitive Data Types

let a = 1;
let b = 2;

let a1 = a;

//console.log(a === a1); //true

//Non-primitive data type

let person1 = {
  name: "Gokul",
  age: 22,
};

let person2 = {
  name: "Gokul",
  age: 22,
};

//console.log(person1 === person2); //false

//Reference comparing object

let person = {
  name: "gokul",
  age: 22,
};

let fperson = person;

// console.log(person === fperson); //true

//we can use JSON.stringify() method to compare object
//console.log(JSON.stringify(person) === JSON.stringify(fperson)); //true

// Compare Objects Using the Lodash _.isEqual() Method by install lodash library
//console.log(_.isEqual(person,fperson));

//References as Function Arguments
function addOne(x) {
  x++;
  return x;
}
let number = 5;
console.log(addOne(number)); // Output: 6
console.log(number); // Output: 5

//using array
function addToArray(array) {
  array.push(4);
  return array;
}

let myArray = [1, 2, 3];
console.log(addToArray(myArray)); // Output: [1, 2, 3, 4]
console.log(myArray); // Output: [1, 2, 3, 4]
