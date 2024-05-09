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
