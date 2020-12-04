const fs = require("fs");

fs.readFile("day4.txt", "utf8", function (err, data) {
  const lines = data.split("\r\n\r\n");
  const result = countValidPassport(lines);

  console.log(result);
});

const VALID_EYE_COLOR = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

class Passport {
  constructor() {}
  byr = "";
  iyr = "";
  eyr = "";
  hgt = "";
  hcl = "";
  ecl = "";
  pid = "";

  validate(document) {
    for (let key in this) {
      let value = document[key];
      if (!value) {
        return false;
      }
      let number = null;

      switch (key) {
        case "byr":
          number = parseInt(value);
          if (number < 1920 || number > 2002) {
            return false;
          }
          break;

        case "iyr":
          number = parseInt(value);
          if (number < 2010 || number > 2020) {
            return false;
          }
          break;

        case "eyr":
          number = parseInt(value);
          if (number < 2020 || number > 2030) {
            return false;
          }
          break;

        case "hgt":
          const height = parseInt(value.substring(0, value.length - 2));
          const unit = value.substring(value.length - 2, value.length);

          if (unit == "cm") {
            if (height < 150 || height > 193) {
              return false;
            }
          } else if (unit === "in") {
            if (height < 59 || height > 76) {
              return false;
            }
          } else {
            return false;
          }

          break;

        case "hcl":
          if (value.length !== 7) {
            return false;
          }
          const regex = /#[\da-z]{6}/g;
          if (!regex.test(value)) {
            return false;
          }
          break;

        case "ecl":
          if (!VALID_EYE_COLOR.includes(value)) {
            return false;
          }
          break;

        case "pid":
          const length = value.length;

          if (value.length !== 9 || !parseInt(value)) {
            return false;
          }
          break;
        default:
          break;
      }
    }
    return true;
  }
}

/**
 *
 * @param {string[]} lines
 */
function countValidPassport(lines) {
  let count = 0;
  lines.forEach((line) => {
    const escape = /\r\n/g;
    const fields = line.replace(escape, " ").split(" ");
    const document = {};
    fields.forEach((field) => {
      const keyValuePair = field.split(":");
      document[keyValuePair[0]] = keyValuePair[1];
    });

    const passport = new Passport();

    if (passport.validate(document)) {
      count++;
    }
  });
  return count;
}
