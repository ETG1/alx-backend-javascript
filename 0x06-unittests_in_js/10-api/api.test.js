// api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api')
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status 200 and the correct message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});

describe('Cart page', () => {
  it('should return status 200 and the correct message for valid cart id', (done) => {
    chai.request(app)
      .get('/cart/12')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Payment methods for cart 12');
        done();
      });
  });

  it('should return status 404 for invalid cart id', (done) => {
    chai.request(app)
      .get('/cart/hello')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Invalid cart ID');
        done();
      });
  });
});

describe('Available Payments', () => {
  it('should return available payment methods', (done) => {
    chai.request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Login', () => {
  it('should return welcome message with the username', (done) => {
    chai.request(app)
      .post('/login')
      .send({ userName: 'Betty' })  // Sending JSON body
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});
