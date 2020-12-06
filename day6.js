const fs = require("fs");

fs.readFile("day6.txt", "utf8", function (err, data) {
  const answers = data.split("\r\n\r\n");
  const result = countCommons(answers);

  console.log(result);
});

/**
 *
 * @param {string[]} answers
 */
function countUniques(answers) {
  let countAnswer = 0;
  answers.forEach((answer) => {
    const escape = /\r\n/g;
    const letters = answer.replace(escape, "").split("");
    const uniqueLetters = new Set(letters);
    console.log(uniqueLetters.size);
    countAnswer += uniqueLetters.size;
  });

  return countAnswer;
}

/**
 *
 * @param {string[]} answers
 */
function countCommons(answers) {
  let countAnswer = 0;
  answers.forEach((answer) => {
    let common = 0;
    const escape = /\r\n/g;
    const letters = answer.replace(escape, "").split("");
    const uniqueLetters = new Set(letters);

    const persons = answer.split(escape);

    uniqueLetters.forEach((l) => {
      if (persons.every((person) => person.includes(l))) {
        common++;
      }
    });
    console.log(common);
    countAnswer += common;
  });

  return countAnswer;
}
