module.exports = function () {
  this.less = function (options) {
    return this
      .filter((data) => {
        try {
          return require("less").render(data, options)
        } catch (e) {
          this.notify("plugin_error", {
            plugin: "less",
            error: e
          })
        }
      }).notify("plugin_run", { plugin: "less" })
  }
}
