const aids = require('aids')
const meow = require('meow')

const cli = meow('
  Usage
    $ aids <text>

  Options
    -u, --upper  Start text with an uppcase letter
    -l, --lower  Start text with a lowercase letter

  Examples
    $ aids aids -l
    aIdS
', {
  alias: {
    u: 'upper',
    l: 'lower'
  }
})
