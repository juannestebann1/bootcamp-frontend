var fs = require('fs')
  fs.readFile(process.argv[2], "utf8", function Read(e, data) {
    var myNumber = data.split("\n").length-1;
	console.log(myNumber)
  })
