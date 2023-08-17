const { log, table } = require('console')
const path = require('path')

const pathJoin = path.join('./test', 'units', 'text.txt')

const pathBase = path.basename(pathJoin)

const pathDir = path.dirname(pathJoin)

log(path.resolve(__dirname, pathJoin))
