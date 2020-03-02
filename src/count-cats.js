module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(element => {
    element.forEach(el => {
      if (el == '^^') {
        result = result + 1
      }
    });
  });
  return result
};
