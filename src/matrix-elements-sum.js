const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const zeroCols = new Set();

  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      zeroCols.add(j);
    }
  }

  let sum = 0;

  for (let j = 0; j < cols; j++) {
    if (zeroCols.has(j)) {
      continue;
    }

    for (let i = 0; i < rows; i++) {
      if (matrix[i][j] !== 0) {
        sum += matrix[i][j];
      } else {
        break;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
