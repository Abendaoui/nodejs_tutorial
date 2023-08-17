const { log, table } = require('console')
const fs = require('fs')

const firstFile = fs.readFileSync('./test/first.tx', 'utf8')
const secondFile = fs.readFileSync('./test/secons.txt', 'utf8')

log(firstFile)
log(secondFile)

// a => append
// w => override
fs.writeFileSync('./test/third.txt', `Append Text`, { flag: 'w' })
