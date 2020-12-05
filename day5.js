const fs = require("fs");

fs.readFile("day5.txt", "utf8", function (err, data) {
  const lines = data.split("\r\n");
  const result = convertToBinaryId(lines);

  const sortedNumbers = result.sort((a, b) => {
    return b - a;
  });
  console.log(sortedNumbers[0]);

  let missingSeat = sortedNumbers[0];
  sortedNumbers.forEach((n) => {
    if (n !== missingSeat) {
      return missingSeat;
    }
    missingSeat--;
  });
  console.log(missingSeat);
});

/**
 *
 * @param {string[]} lines
 */
function convertToBinaryId(lines) {
  const coordinates = [];
  lines.forEach((line) => {
    const chars = line.split("");
    const bitmap = chars.map((char) => {
      switch (char) {
        case "B":
          return 1;
        case "F":
          return 0;
        case "R":
          return 1;
        case "L":
          return 0;
        default:
          return -1;
      }
    });
    const row =
      bitmap[0] * 64 +
      bitmap[1] * 32 +
      bitmap[2] * 16 +
      bitmap[3] * 8 +
      bitmap[4] * 4 +
      bitmap[5] * 2 +
      bitmap[6] * 1;
    const column = bitmap[7] * 4 + bitmap[8] * 2 + bitmap[9] * 1;
    coordinates.push({ row, column });
  });

  return coordinates.map((c) => {
    return c.row * 8 + c.column;
  });
}
