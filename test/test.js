var fs = require("fs")
var fixture = fs.readFileSync(__dirname + "/fixture.css", "utf8")
var css = fs.readFileSync(__dirname + "/style.css", "utf8")

if (css !== fixture) {
  console.error('See: diff test/fixture.css test/style.css')
  process.exit(1)
}

if (fs.existsSync(__dirname + "/style.css")) {
  fs.unlinkSync(__dirname + "/style.css")
}
