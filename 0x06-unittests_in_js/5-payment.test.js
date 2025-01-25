const sinon = require('sinon');
const { sendPaymentRequestToAPI } = require('./5-payment');
const Utils = require('./5-payment').Utils;

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    // Set up a spy for console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log function
    consoleSpy.restore();
  });

  it('should log the total as 120 when called with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);

    // Verify console.log is called once with the correct string
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
  });

  it('should log the total as 20 when called with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);

    // Verify console.log is called once with the correct string
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
  });
});
