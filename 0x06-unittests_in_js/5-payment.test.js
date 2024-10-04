// 5-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  // Use beforeEach to set up the spy before each test
  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Use afterEach to restore the original console.log after each test
  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    
    // Verify that console.log is called with the correct output
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    // Verify that console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is called with the correct output
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    // Verify that console.log was only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
