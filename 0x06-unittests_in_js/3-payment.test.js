import chai from 'chai';
import sinon from 'sinon';
import Utils from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('validates the usage of Utils.calculateNumber', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
