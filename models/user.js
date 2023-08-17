class User {
  constructor(Fname, Lname) {
    this.f = Fname
    this.l = Lname
  }
  getFullName() {
    return `${this.f} ${this.l}`
  }
}

module.exports = { User }
