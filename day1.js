const fs = require("fs");

fs.readFile("day1.txt", "utf8", function (err, data) {
  const input = data.split("\r\n");
  const result = twoSums(input, 2020);

  console.log(result);
  console.log(input[result[0]] * input[result[1]] * input[result[2]]);
});

/**
 *
 * @param {number[]} input
 * @param {number} sum
 */
function twoSums(input, sum) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        if (
          parseInt(input[i]) + parseInt(input[j]) + parseInt(input[k]) ===
          sum
        ) {
          return [i, j, k];
        }
      }
    }
  }

  return [];
}
