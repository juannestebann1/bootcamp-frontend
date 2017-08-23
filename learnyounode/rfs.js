var fs = require("fs")

var b = fs.readFileSync(process.argv[2]).toString().split("\n").length

console.log(b-1)