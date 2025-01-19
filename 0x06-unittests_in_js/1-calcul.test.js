const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', function () {
  it('should return the rounded sum of two numbers', function () {
    const res = calculateNumber('SUM', 1, 2);
    assert.strictEqual(res, 3);
  });

  it('should return the rounded subtraction of two numbers', function () {
    const res = calculateNumber('SUBTRACT', 1.4, 2.2);
    assert.strictEqual(res, -1);
  });

  it('should handle subtraction where result is positive', function () {
    const res = calculateNumber('SUBTRACT', 4.9, 2.7);
    assert.strictEqual(res, 2);
  });

  it('should return the rounded division of two numbers', function () {
    const res = calculateNumber('DIVIDE', 4, 2);
    assert.strictEqual(res, 2);
  });

  it("should return 'Error' when dividing by zero", function () {
    const res = calculateNumber('DIVIDE', 1.7, 0);
    assert.strictEqual(res, 'Error');
  });

  it('should correctly handle division resulting in a fraction', function () {
    const res = calculateNumber('DIVIDE', 1.4, 4.6);
    assert.strictEqual(res, 0.2);
  });

  it('should throw an error for invalid operation type', function () {
    assert.throws(
      () => calculateNumber('MULTIPLY', 1, 2),
      /Invalid operation type/
    );
  });
});
