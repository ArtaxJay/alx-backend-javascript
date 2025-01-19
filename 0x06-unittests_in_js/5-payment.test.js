const sendPaymentRequestToAPI = require('./5-payment');

describe('Testing sendPaymentRequestToAPI function', () => {
  let consoleSpy;

  // This hook runs before each test
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log'); // Create a spy for console.log
  });

  // This hook runs after each test to restore the original behavior of console.log
  afterEach(() => {
    consoleSpy.mockRestore(); // Remove the spy after each test
  });

  it('should call console.log once with the correct total for price 100 and quantity 20', () => {
    sendPaymentRequestToAPI(100, 20);

    // Verify the output and that the spy was called once
    expect(consoleSpy).toHaveBeenCalledWith('The total is: 120');
    expect(consoleSpy).toHaveBeenCalledTimes(1); // Check that console.log was called once
  });

  it('should call console.log once with the correct total for price 10 and quantity 10', () => {
    sendPaymentRequestToAPI(10, 10);

    // Verify the output and that the spy was called once
    expect(consoleSpy).toHaveBeenCalledWith('The total is: 20');
    expect(consoleSpy).toHaveBeenCalledTimes(1); // Check that console.log was called once
  });
});
