/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let columnsToBeDeletedCount = 0;
  for (let i = 0; i < strs.length; i++) {
    let isSorted = true;
    let prevValue = strs[0].charAt(i);

    for (let j = 1; j < strs[0].length; j++) {
      if (strs[j].charAt(i) < prevValue) {
        isSorted = false;
        break;
      }

      console.log(prevValue, strs[j].charAt(i), isSorted);

      prevValue = strs[j].charAt(i);
    }

    if (isSorted) {
      return columnsToBeDeletedCount;
    } else {
      columnsToBeDeletedCount += 1;
    }
  }

  return columnsToBeDeletedCount;
};

// const strs = ["ca", "bb", "ac"];
// const strs = ["zyx","wvu","tsr"];
const strs = ["xga", "xfb", "yfa"];
console.log(minDeletionSize(strs)); // Output: 1
