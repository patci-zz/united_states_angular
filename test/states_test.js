var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

process.env.MONGOLAB_URI = 'mongodb://localhost/state_test';
require(__dirname + '/../server');
var mongoose = require('mongoose');
var State = require(__dirname + '/../models/state')

describe('states routes', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should be able to create a state', function(done) {
    var stateData = {stateName: 'Missouri', token: this.token};
    chai.request('localhost:3000')
    .post('/api/states')
    .send(stateData)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.stateName).to.eql('Missouri');
      expect(res.body).to.have.property('_id');
      done();
    });
  });

  it('should be able to get all states', function(done) {
    chai.request('localhost:3000')
    .get('/api/states')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.eql(true);
      done();
    });
  });

  describe('needs a state', function() {
    beforeEach(function(done) {
      (new State({name: 'test state', token: this.token})).save(function(err, data) {
        expect(err).to.eql(null);
        this.state = data;
        done();
      }.bind(this));
      });

    it('should be able to modify a state', function(done) {
      chai.request('localhost:3000')
      .put('/api/states/' + this.state._id)
      .send({stateName: 'Montana', token: this.token})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('success!');
        done();
      });
    });

    it('should remove a state', function(done) {
      chai.request('localhost:3000')
      .delete('/api/states/' + this.state._id)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('success!');
        done();
      });
    });
  });
});
