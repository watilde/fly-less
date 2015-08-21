const less = require("less")
const assign = require("object-assign")

module.exports = function () {
  this.filter("less", (data, options) => {
    return this.defer(less.render.bind(less))(data.toString(), options)
      .then((result) => assign({ ext: ".css" }, result))
  })
}
