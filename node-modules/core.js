const path = require("path");
const util = require("util");
const v8 = require("v8");
// const dirNode = path.join(__dirname,"node-globals","node");
util.log(path.basename(__filename));
// console.log(dirNode);
util.log(" ^ The name of the current file");
util.log(v8.getHeapStatistics());