/**
 * LeetCode Javascript 30
 * Problem 2626. Array Reduce Transformation 
 */

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let accumulator = init;

  if (nums.length == 0) return accumulator;

  for (let i = 0; i < nums.length; i++) {
    console.log(accumulator, nums[i]);

    accumulator = fn(accumulator, nums[i]);
  }

  return accumulator;
};

// const nums = [1, 2, 3, 4];

// const fn = function sum(accum, curr) {
//   return accum + curr;
// };

// let init = 0;

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100

// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25

console.log(reduce(nums, fn, init));
