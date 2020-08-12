const fs = require("fs");
const { parse, stringify } = require("flatted");

const save = function (filename, data) {
  fs.writeFileSync(filename, stringify(data));
};

const load = function (filename) {
  return parse(fs.readFileSync(filename, "utf8"));
};

module.exports = { save, load };
