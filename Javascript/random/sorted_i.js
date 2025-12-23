/**
 * LeetCode Javascript
 * Problem 944. Delete Columns to Make Sorted 
 */

// /**
//  * @param {string[]} strs
//  * @return {number}
//  */
// var minDeletionSize = function (strs) {
//   let columnCount = 0;

//   for (let i = 0; i < strs[0].length; i++) {
//     let isSorted = true;

//     for (let j = 1; j < strs.length; j++) {
//       console.log(strs[j - 1][i], strs[j][i]);

//       if (strs[j - 1][i] > strs[j][i]) {
//         isSorted = false;
//         break;
//       }
//     }

//     if (!isSorted) {
//       columnCount += 1;
//     }
//   }

//   return columnCount;
// };

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let columnCount = 0;

  for (let i = 0; i < strs[0].length; i++) {
    let isSorted = true;
    let prevValue = strs[0].charCodeAt(i);

    for (let j = 1; j < strs.length; j++) {

      if (strs[j].charCodeAt(i) < prevValue) {
        isSorted = false;
        break;
      }

      prevValue = strs[j].charCodeAt(i);
    }

    if (!isSorted) {
      columnCount += 1;
    }
  }

  return columnCount;
};

const strs = ["a", "b"];
// const strs = ["cba", "daf", "ghi"];
// const strs = ["rrjk", "furt", "guzm"];
console.log(minDeletionSize(strs)); // Output: 1
