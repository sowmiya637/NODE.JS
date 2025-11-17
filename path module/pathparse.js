//It takes a full file path and splits it into useful pieces.

const path = require("path");
const parsed = path.parse("C:/project/app/server.js");
console.log(parsed);