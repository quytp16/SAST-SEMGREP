const fs = require("fs");

function read(req) {
  fs.readFile(req.query.file, () => {});
  fs.readFile(req.body.path, () => {});
}
