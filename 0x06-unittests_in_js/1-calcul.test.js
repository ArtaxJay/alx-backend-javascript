const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 1.2), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 3.4), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 10, 4.5), 5);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.3), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 9.7, 2.1), 5);
    });

    it('should return "Error" if dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 7.7, 0.2), 'Error');
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid operation type', function () {
      assert.throws(
        () => calculateNumber('MULTIPLY', 2, 3),
        /Invalid operation type/
      );
    });
  });
});
