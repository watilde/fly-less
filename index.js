const less = require("less")
const assign = require("object-assign")

module.exports = function () {
  this.filter("less", (source, options) => {
    return this.defer(less.render.bind(less))(source, options)
      .then((result) => result.css.toString())
  }, { ext: ".css" })
}
