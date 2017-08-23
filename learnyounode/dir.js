const fs = require("fs")

fs.readdir(process.argv[2], (e, list)=>{
	const filteredList = list.filter(item => item.indexOf(".") >= 0)
	.filter(item => item.indexOf(process.argv[3]) >= 0)
	for (var i = 0; i < filteredList.length; i++) {
		console.log(filteredList[i])
	}
})
