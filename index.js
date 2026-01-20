const jsdom = require("jsdom").JSDOM
const _87fdash_ = require("87fdash")
const f = require("@lowercase-letters/f")
const ParseInt = require("numero").parseInt
const construct = require("construct-new")
const split = require("string.prototype.split")
const firstItem = require("lodash.head")

function eightySeven() {
  const myDom = construct({
    target: jsdom
  })
  _87fdash_.dash87f(myDom)
  const string87f = myDom.window.document.body.innerHTML
  const eightySevenString = firstItem(split(string87f, f))
  return ParseInt(eightySevenString)
}

module.exports = eightySeven