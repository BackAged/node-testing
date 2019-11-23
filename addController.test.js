const addController = require('./addController');
const adder = require('./adder');

jest.mock('./adder');

describe('add', () => {
  const mAdder = new adder();
  const addC = new addController(mAdder);

  it('should add two positive numbers', () => {
    // stubbing
    adder.mock.instances[0].add.mockClear();
    adder.mock.instances[0].add.mockImplementationOnce(
      (a,b) => a + b
    )

    expect( addC.add(2, 3) ).toBe(5);

    //spying
    expect( adder.mock.instances[0].add).toHaveBeenCalledTimes(1);
    expect( adder.mock.instances[0].add).toHaveBeenCalledWith(2, 3);
  });

  it('should throw error for negative numbers', () => {
    adder.mock.instances[0].add.mockClear();
    adder.mock.instances[0].add.mockImplementationOnce (
      (a, b) => {
        throw new Error("only positives");
      }
    );

    expect(() => addC.add(2,-3)).toThrow();

    //spying
    expect( adder.mock.instances[0].add).toHaveBeenCalledTimes(1);
    expect( adder.mock.instances[0].add).toHaveBeenCalledWith(2, -3);
  });
});