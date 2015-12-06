
# clone-date

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Clone a date object

## Installation

    $ npm install @micro-js/clone-date

## Usage

```js
var cloneDate = require('@micro-js/clone-date')
var date = new Date()
var newDate = cloneDate(date)

date.getTime() === newDate.getTime()
date !== newDate
```

## API

### cloneDate(date)

- `date` - The date object to be cloned

**Returns:** A new date object with the same timestamp as `date`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/clone-date.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/clone-date
[git-image]: https://img.shields.io/github/tag/micro-js/clone-date.svg
[git-url]: https://github.com/micro-js/clone-date
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/clone-date.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/clone-date
