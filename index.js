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

let offset = false
let string

if(cli.flags.offset) {
  offset = true;
}

for(i = 0; i < cli.input[].length; i++) {
  if(cli.input[i] != '-o' || cli.input[i] != '--output') {
    string += cli.input[i]
  }
}

console.log(aids(string, offset))
