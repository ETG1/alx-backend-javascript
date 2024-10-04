// api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');  // Import the app from api.js
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status 200 and the correct message', (done) => {
    chai.request(app)
      .get('/')  // Send a GET request to the root route
      .end((err, res) => {
        expect(res).to.have.status(200); // Check for status code 200
        expect(res.text).to.equal('Welcome to the payment system'); // Check the response text
        done();  // Call done to finish the test
      });
  });
});
