exports.default = function* () {
  yield this
    .source("style.less")
    .less({/* options */})
    .target("style.css")
}
