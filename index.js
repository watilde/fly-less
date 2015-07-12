var assign = require("object-assign")
var less = require("less")
var options = {}

module.exports = function () {
  return this.filter("less", (str, opts) => {
    options = assign({}, {
      compress: false,
      paths: []
    }, opts)

    return this.defer(compile)(str)
  }, { ext: ".css" })
}

function compile (str, cb) {
  less.render(str, options).then(function (out) {
    cb(null, out.css)
  }).catch(function (e){
    cb(e)
  })
}
