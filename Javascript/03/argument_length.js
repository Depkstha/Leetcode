/**
 * LeetCode Javascript 30
 * Problem 2703. Return Length of Arguments Passed
*/

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    console.log(args);
    return args.length;
};

console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength("foo", "bar")); // 2
console.log(argumentsLength({}, null, "3")); // 3