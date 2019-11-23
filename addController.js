class AddController {
    constructor(adder) {
      this.adder = adder;
    }
  
    add(a, b) {
      return this.adder.add(a, b);
    }
  }
  
  module.exports = AddController;