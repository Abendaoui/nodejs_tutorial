class Book {
  constructor(title) {
    this.f = title
  }
  getBookName() {
    return `Book Name : ${this.f}`
  }
}

module.exports = { Book }
