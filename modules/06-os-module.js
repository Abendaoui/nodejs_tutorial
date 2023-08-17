const { log, table } = require('console')
const os = require('os')

const currentOs = {
  name: os.type(),
  release: os.release(),
  version: os.version(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

table(currentOs)
