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
  })
}

function compile (str, cb) {
  less.render(str, options).then(function (out) {
    cb.resolve(null, out.css)
  }).catch(function (e){
    cb.resolve(e)
  })
}
