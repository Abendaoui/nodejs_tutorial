class Music {
  constructor(title, singer) {
    this.f = title
    this.l = singer
  }
  getFullName() {
    return `${this.f} By ${this.l}`
  }
}

module.exports = { Music }
