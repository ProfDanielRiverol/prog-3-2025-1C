// const add = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(add(2, 5));
// module.exports = add
// console.log(module);
//segunda forma de exportar
// module.exports = (num1, num2) => {
//   return num1 + num2;
// };
// module.exports.add = (num1, num2) => {
//   return num1 + num2;
// };

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

// module.exports = {
//   add: add,
//   substract: substract,
// };
module.exports = {
  add,
  substract,
};
