/**
 * LeetCode Javascript 30
 * Problem 2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (n) => {
      if (val === n) return true;
      throw Error("Not Equal");
    },
    notToBe: (n) => {
      if (val !== n) return true;
      throw Error("Equal");
    },
  };
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
expect(5).toBe(null); // throws "Not Equal"