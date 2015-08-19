module.exports.default = function* () {
  yield this
    .source("test/style.less")
    .less({
      paths: "test"
    })
    .target("test")
}
