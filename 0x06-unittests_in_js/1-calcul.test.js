const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for inputs (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -3 for inputs (-1.4, -1.5)', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -1.5), -3);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for inputs (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 for inputs (1.7, -0.8)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.7, -0.8), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for inputs (1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error for inputs (1.4, 0)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return -2 for inputs (-4.5, 2.3)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.5, 2.3), -2);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
    });
  });
});
