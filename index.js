#! /usr/bin/env node

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

for (let i in cmd.args) {
  text += cmd.args[i] + " "
  i++
}

if (text != '') {
  console.log(aids(text, cmd.offset))
} else {
  cmd.help()
}
