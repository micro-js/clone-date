/**
 * Expose cloneDate
 */

module.exports = cloneDate['default'] = cloneDate

/**
 * cloneDate
 */

function cloneDate (date) {
  return new Date(date.getTime())
}
