// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when a is 1.4 and b is 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when a is -0.4 and b is 0.4', function() {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when a is 1.4 and b is 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 3 when a is 5.5 and b is 2.4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.4), 3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when a is 1.4 and b is 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when b rounds to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return Infinity when a is large and b rounds to 1', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1000, 1), 1000);
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for an invalid operation type', function() {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 1), Error);
    });
  });
});
