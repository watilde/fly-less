const less = require("less")
const assign = require("object-assign")

module.exports = function () {
  this.filter("less", (data, options) => {
    options = assign({}, {
      compress: false,
      paths: []
    }, options)

    return this.defer(less.render.bind(less))(data.toString(), options)
      .then((result) => result.css.toString())
  }, { ext: ".css" })
}
