/**
 * LeetCode Javascript 30
 * Problem 2629. Composite Function
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {

    let result = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
const x = 4;

console.log(fn(x)); // 9
