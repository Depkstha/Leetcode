/**
 * LeetCode Javascript 30
 * Problem 2666. Allow one Function Call
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let hasBeenCalled = false;

  return function (...args) {
    console.log(args);
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

fn = (a, b, c) => a + b + c;
onceFn = once(fn);
console.log(onceFn(1, 2, 3));