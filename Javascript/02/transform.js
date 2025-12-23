/**
 * LeetCode Javascript 30
 * Problem 2635. Apply Transform Over Each Element in Array
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

arr = [1,2,3], fn = function plusone(n) { return n + 1; }
const newArray = map(arr, plusone);
console.log(newArray); // [2,3,4]