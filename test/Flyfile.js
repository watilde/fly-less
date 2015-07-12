module.exports.default = function* () {
  yield this
    .source("style.less")
    .less()
    .target("./")
}
