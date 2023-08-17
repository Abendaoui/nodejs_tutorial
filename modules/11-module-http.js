const { log, table, error } = require('console')
const http = require('http')

let server = http.createServer((req, res) => {
  const effects = {
    about: 'About Us',
    contact: 'Coantact Us',
    products: 'Products',
  }
  if (req.url === '/') {
    res.end('Ur In Our Home Page Now')
  }
  if (req.url !== '/' && effects[req.url.slice(1)]) {
    res.end(`Ur Currently In Our ${effects[req.url.slice(1)]} Page Now`)
  }
  res.end(`<h4>Ooops Look Like It's A Dead End</h4>`)
})

server.listen(5000)
