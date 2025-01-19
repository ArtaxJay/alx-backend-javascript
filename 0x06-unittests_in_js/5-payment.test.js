// 5-payment.test.js
const chai = require('chai');
const assert = chai.assert;
const sendPaymentRequestToAPI = require('./5-payment');

describe('Testing sendPaymentRequestToAPI function', () => {
  let consoleSpy;

  // This hook runs before each test
  beforeEach(() => {
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  // This hook runs after each test to restore the original behavior of console.log
  afterEach(() => {
    // Restore original console.log behavior
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with price 100 and quantity 20', () => {
    sendPaymentRequestToAPI(100, 20);

    // Check that the console was called with the correct total
    assert(
      consoleSpy.calledOnceWith('The total is: 120'),
      'Console log should be called once with "The total is: 120"'
    );
  });

  it('should log "The total is: 20" when called with price 10 and quantity 10', () => {
    sendPaymentRequestToAPI(10, 10);

    // Check that the console was called with the correct total
    assert(
      consoleSpy.calledOnceWith('The total is: 20'),
      'Console log should be called once with "The total is: 20"'
    );
  });
});
