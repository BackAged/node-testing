const addController = require('./addController');
const adder = require('./adder');

jest.mock('./adder');

describe('add', () => {
  const mAdder = new adder();
  const addC = new addController(mAdder);

  it('should add two positive numbers', () => {
    adder.mock.instances[0].add.mockClear();
    adder.mock.instances[0].add.mockImplementationOnce(
      (a,b) => a + b
    )

    expect( addC.add(2, 3) ).toBe(5);
  });

  it('should throw error for negative numbers', () => {
    adder.mock.instances[0].add.mockClear();
    adder.mock.instances[0].add.mockImplementationOnce (
      (a, b) => {
        throw new Error("only positives");
      }
    );

    expect(() => addC.add(2,-3)).toThrow();
  });
});