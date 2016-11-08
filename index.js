const aids = require('aids')
const meow = require('meow')

const cli = meow('
  Usage
    $ aids <text>

  Options
    -o, --offset  Start with a lowercase letter instead of uppercase

  Examples
    $ aids aids -o
    aIdS
', {
  alias: {
    o: 'offset'
  }
})
