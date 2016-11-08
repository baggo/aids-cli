module.exports = aids

function aids (source, offset) {
  var caps = !offset
  return source.split('')
  .map(x => aids.test.test(x) && (caps = !caps)
    ? x.toLowerCase()
    : x.toUpperCase())
  .join('')
}

aids.test = /[\S]/
