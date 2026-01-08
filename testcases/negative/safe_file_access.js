const fs = require("fs");
const path = require("path");

function readFile(filename) {
  const safePath = path.join("/var/data", filename);
  fs.readFile(safePath, () => {});
}
