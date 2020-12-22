class Maths {
  constructor(n, m) {
    this.a = parseInt(n)
    this.b = parseInt(m)
  }

  sum() {
    return this.a + this.b
  }

  subtract() {
    return this.a - this.b
  }

  multiply() {
    return this.a * this.b
  }

  divide() {
    return this.a / this.b
  }
}

module.exports = Maths
