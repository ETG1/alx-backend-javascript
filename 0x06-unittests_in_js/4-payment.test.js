// 4-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
  let calculateNumberStub, consoleLogSpy;

  beforeEach(function() {
    // Stub the Utils.calculateNumber method to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the original methods after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function() {
    sendPaymentRequestToApi(100, 20);

    // Check if Utils.calculateNumber was called once with the right arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify console.log output
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
