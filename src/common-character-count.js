const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;

  let s1Counts = {};
  let s2Counts = {};

  for (let i = 0; i < s1.length; i++) {
    s1Counts[s1[i]] ? s1Counts[s1[i]]++ : (s1Counts[s1[i]] = 1);
  }

  for (let i = 0; i < s2.length; i++) {
    s2Counts[s2[i]] ? s2Counts[s2[i]]++ : (s2Counts[s2[i]] = 1);
  }

  for (let char in s1Counts) {
    if (char in s2Counts) {
      result += Math.min(s1Counts[char], s2Counts[char]);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};

getCommonCharacterCount("aabcc", "adcaa");
