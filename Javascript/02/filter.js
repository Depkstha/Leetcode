/**
 * LeetCode Javascript 30
 * Problem 2634. FIlter Elements From Array
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];

    let result = fn(currentValue, i);

    if (result) filteredArr.push(currentValue);
  }
  return filteredArr;
};

// const arr = [0, 10, 20, 30];

// const fn = function greaterThan10(n) {
//   return n > 10;
// };

const arr = [-2, -1, 0, 1, 2];

const fn = function plusOne(n) {
    return n + 1;
  };

console.log(filter(arr, fn));
