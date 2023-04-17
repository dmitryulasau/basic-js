const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let seen = 1;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (str[i] === str[i + 1]) {
      seen++;
    } else {
      if (seen === 1) {
        result += letter;
      } else {
        result += seen + letter;
        seen = 1;
      }
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};

// encodeLine("aaaatttt");
encodeLine("abbcca");
