console.log("Hello World")
console.log(global)

// importing OS
const os = require('os');
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log((__dirname))
console.log((__filename))

// importing path
const path = require("path")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
