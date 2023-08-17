const { log, table, error } = require('console')
const fs = require('fs')

const pathOne = './test/first.txt'
const pathTwo = './test/secons.txt'
const pathThree = './test/third.txt'

fs.writeFile('./test/fourth.txt', '\nAdd Line', { flag: 'a' }, (err) => {
  if (err) {
    error(err)
    return
  }
  log('=======================')
  log('Line Add Success')
  log('=======================')
})

fs.readFile(pathOne, 'utf8', function (err, data) {
  if (err) {
    error(err)
    return
  }
  log(data)
})
