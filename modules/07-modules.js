const { items, singlePerson } = require('./04-alternative')
const { User } = require('./models/User')
const user = new User('Adil', 'Bendaoui')

console.log(user.getFullName())
console.log(items)
