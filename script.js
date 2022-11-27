// "use strict";

//1) Написати функцію струлку, яка приймає безліч аргументів і
//повертає їх добуток.
//исп for

let arrowMain = [2, 3, 3, 2];

const funcArrow = (...rest) => {
  let result = 1;
  for (let i = 0; i < rest.length; i++) {
    result *= rest[i];
  }
  return result;
};
console.log(funcArrow(...arrowMain));

//forEach
const funcArrow2 = (...rest) => {
  let result = 1;
  rest.forEach((rest) => {
    return (result *= rest);
  });
  return result;
};

console.log(funcArrow2(...arrowMain));

//reduce
const funcArrow3 = (...rest) => rest.reduce((total, number) => total * number);

console.log(funcArrow3(...arrowMain));

//2) Є масив чисел, треба написати функцію, яка повертає масив з
//двох елементів, які є мінімальним і максимальним значенням джерельного масиву.

let arraySecond = [1, 2, 2, 5, 5, 5, 6];
const ArrayFindMax = () => {
  let max = Math.max(...arraySecond);
  return max;
};

const ArrayFindMin = () => {
  let min = Math.min(...arraySecond);
  return min;
};

const pushFunc = () => {
  let arrayValues = [];
  arrayValues.push(ArrayFindMax(), ArrayFindMin());
  return arrayValues;
};

console.log(pushFunc());


