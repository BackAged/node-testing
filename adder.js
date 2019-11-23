class Adder {
    constructor() {}
  
    add(a, b) {
      if (a < 0 || b < 0) {
        throw new Error("Only Positive shit");
      }
      return a + b;
    }
  }
  
module.exports = Adder;