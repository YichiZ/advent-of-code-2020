const fs = require("fs");

fs.readFile("day3.txt", "utf8", function (err, data) {
  const input = data.split("\r\n");
  const result = multiplyAnswers(input);

  console.log(result.reduce((a, c) => a * c, 1));
});

/**
 *
 * @param {string[]} rows
 */
function countTrees(rows) {
  const map = [];
  const height = rows.length;
  const width = rows[0].length;

  rows.forEach((row) => {
    map.push(row.split(""));
  });

  let treeCount = 0;
  let x = 0;
  for (let i = 0; i < height; i++) {
    const point = map[i][x];
    if (point === "#") {
      treeCount++;
    }

    x = (x + 3) % width;
  }

  return treeCount;
}

/**
 *
 * @param {string[]} input
 */
function multiplyAnswers(input) {
  const shifts = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  const answers = [];
  shifts.forEach((shift) => {
    answers.push(countTrees2(input, shift[0], shift[1]));
  });

  return answers;
}

/**
 *
 * @param {string[]} rows
 * @param {number} rightShift
 * @param {number} downShift
 */
function countTrees2(rows, rightShift, downShift) {
  const map = [];
  const height = rows.length;
  const width = rows[0].length;

  rows.forEach((row) => {
    map.push(row.split(""));
  });

  let treeCount = 0;
  let x = 0;
  for (let i = 0; i < height; i = i + downShift) {
    const point = map[i][x];
    if (point === "#") {
      treeCount++;
    }

    x = (x + rightShift) % width;
  }

  return treeCount;
}
