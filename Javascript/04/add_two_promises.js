/**
 * LeetCode Javascript 30
 * Problem 2723. Add Two Promises
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  await Promise.all([promise1, promise2]);
  return a + b;
};

console.log(
  addTwoPromises(
    new Promise((resolve) => setTimeout(() => resolve(2), 20)),
    new Promise((resolve) => setTimeout(() => resolve(5), 60))
  ).then(console.log)
);
