const { exec, execSync, spawn } = require("child_process");

function run(req) {
  exec(req.query.cmd);
  execSync(req.body.command);
  spawn(req.params.bin);
}
