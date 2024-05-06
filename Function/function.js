//Currying
//sum(2)(7)(1)

function sum(c) {
  return function (d) {
    return function (e) {
      return c + d + e;
    };
  };
}

console.log(sum(2)(7)(4));

//Infinite Currying

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

//console.log(add(5)(1)(3)(1)());
