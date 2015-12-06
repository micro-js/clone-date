/**
 * Imports
 */

var cloneDate = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var a = new Date()
  var b = cloneDate(a)

  t.equal(a.getTime(), b.getTime())
  t.notEqual(a, b)
  t.end()
})
