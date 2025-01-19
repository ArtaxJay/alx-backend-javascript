const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateStub;

  beforeEach(() => {
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
    // Stub the calculateNumber method
    calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    // Restore original methods
    sinon.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log correct total', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify the stub is called with correct arguments
    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify the correct console log
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
