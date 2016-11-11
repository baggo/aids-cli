const aids = require('aids')
const cmd = require('commander')
const package = require('./package.json')
let text = '';

cmd
  .version(package.version)
  .description(package.description)
  .usage('[options] [text]')
  .option('-o, --offset', 'Output capital letter with an offset')
  .parse(process.argv);

<<<<<<< HEAD
for(let i in cmd.args) {
  text += cmd.args[i] + " "
  i++
}

text != '' ? console.log(aids(text, cmd.offset)) : cmd.help()
=======
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
>>>>>>> bfd17230ef45b44acb40b263f0282a3d3f2952ac
