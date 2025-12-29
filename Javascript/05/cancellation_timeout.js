/**
 * LeetCode Javascript 30
 * Problem 2715. Timeout Cancellation
 */
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const timerId = setTimeout(() => {
    console.log(fn(...args));
  }, t);

  return function cancelFn() {
    clearTimeout(timerId);
  };
};

fn = (x) => x * 5, args = [2], t = 20
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

