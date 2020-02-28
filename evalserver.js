const nmath = require("./math.js");
const assert = require('assert');
const repl = require('repl');

const help = "nmath repl 서버";

const r = repl.start("> ");
r.context.help = help;
r.context.nmath = nmath;
r.context.assert = assert;