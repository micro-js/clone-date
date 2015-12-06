/**
 * Expose cloneDate
 */

module.exports = cloneDate['default'] = cloneDate

/**
  * Clone Date
 * @param  {Date} date
 * @return {Date}
 */

function cloneDate (date) {
  return new Date(date.getTime())
}
