const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber()', function () {
  it('should return the rounded sum of two numbers', function () {
    const result = calculateNumber('SUM', 1, 2);
    expect(result).to.equal(3);
  });

  it('should return the rounded subtraction of two numbers', function () {
    const result = calculateNumber('SUBTRACT', 1.4, 2.2);
    expect(result).to.equal(-1);
  });

  it('should handle subtraction where result is positive', function () {
    const result = calculateNumber('SUBTRACT', 4.9, 2.7);
    expect(result).to.equal(2);
  });

  it('should return the rounded division of two numbers', function () {
    const result = calculateNumber('DIVIDE', 4, 2);
    expect(result).to.equal(2);
  });

  it("should return 'Error' when dividing by zero", function () {
    const result = calculateNumber('DIVIDE', 1.7, 0);
    expect(result).to.equal('Error');
  });

  it('should correctly handle division resulting in a fraction', function () {
    const result = calculateNumber('DIVIDE', 1.4, 4.6);
    expect(result).to.equal(0.2);
  });

  it('should throw an error for invalid operation type', function () {
    expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(
      'Invalid operation type'
    );
  });
});
