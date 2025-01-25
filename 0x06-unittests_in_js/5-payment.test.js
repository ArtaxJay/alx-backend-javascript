const sinon = require('sinon');
const { sendPaymentRequestToAPI } = require('./5-payment');
const { Utils } = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber and log the total as 120 when called with 100 and 20', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToAPI(100, 20);

    sinon.assert.calledOnce(utilsSpy);
    sinon.assert.calledWithExactly(utilsSpy, 'SUM', 100, 20);
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');

    utilsSpy.restore();
  });

  it('should call Utils.calculateNumber and log the total as 20 when called with 10 and 10', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToAPI(10, 10);

    sinon.assert.calledOnce(utilsSpy);
    sinon.assert.calledWithExactly(utilsSpy, 'SUM', 10, 10);
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');

    utilsSpy.restore();
  });
});
