const fs = require("fs");

fs.readFile("day2.txt", "utf8", function (err, data) {
  const input = data.split("\r\n");
  const result = validPasswordNumber2(input);

  console.log(result);
});

/**
 *
 * @param {string[]} input
 */
function validPasswordNumber(input) {
  let validPasswordsCount = 0;
  input.forEach((line) => {
    const arr = line.split(" ");

    const numbers = arr[0].split("-");
    const lower = parseInt(numbers[0]);
    const upper = parseInt(numbers[1]);

    const validLetter = arr[1][0];

    let count = 0;
    arr[2].split("").forEach((letter) => {
      if (letter === validLetter) {
        count++;
      }
    });

    if (count >= lower && count <= upper) {
      validPasswordsCount++;
      console.log(line);
    }
  });

  return validPasswordsCount;
}

/**
 *
 * @param {string[]} input
 */
function validPasswordNumber2(input) {
  let validPasswordsCount = 0;
  input.forEach((line) => {
    const arr = line.split(" ");

    const numbers = arr[0].split("-");
    const lower = parseInt(numbers[0]);
    const upper = parseInt(numbers[1]);

    const validLetter = arr[1][0];

    const passwordArr = arr[2].split("");

    let count = 0;

    if (passwordArr[lower - 1] === validLetter) {
      count++;
    }

    if (passwordArr[upper - 1] === validLetter) {
      count++;
    }

    if (count === 1) {
      validPasswordsCount++;
      console.log(line);
    }
  });

  return validPasswordsCount;
}
