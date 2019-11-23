const adder = require('./adder');


describe('add', () => {
  const mAdder = new adder();

  it('should add two positive numbers', () => {
    expect( mAdder.add(2, 3) ).toBe(5);
  });

  it('should add throw for negative numbers', () => {
    expect(()=> mAdder.add(2, -3) ).toThrow();
  });
});