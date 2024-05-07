//Currying
//sum(2)(7)(1)

function sum(c) {
  return function (d) {
    return function (e) {
      return c + d + e;
    };
  };
}

//console.log(sum(2)(7)(4));

//Infinite Currying

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

//console.log(add(5)(1)(3)(1)());

//Methods

//bind() method

var user = {
  name: "John",
  age: 26,
  getName: function (surname) {
    //console.log("User name is " + this.name + " " + surname);
  },
};

var user2 = {
  name: "Ravi",
  age: 28,
};

// var x = user.getName.bind(user2);
// x("Shankar");

//call() method
user.getName.call(user2, "Shankar");

//apply() method
user.getName.apply(user2, ["Shankar"]);

//Function Memoization
const preValues = [];

function sqaure(n) {
  if (preValues[n] != null) {
    return preValues[n];
  }
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  preValues[n] = result;
  return result;
}

// console.log(sqaure(30));
// console.log(sqaure(30));
// console.log(sqaure(30));
// console.log(sqaure(30));
// console.log(sqaure(30));
// console.log(sqaure(30));

//Memoization method
function fib(n, val = []) {
  if (val[n] != null) {
    return val[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, val) + fib(n - 2, val);
  }
  val[n] = result;
  return result;
}

console.log(fib(50));
