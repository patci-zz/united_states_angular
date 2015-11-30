var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
process.env.MONGOLAB_URI = 'mongodb://localhost/beer_test';
require(__dirname + '/../server');
var mongoose = require('mongoose');
var Beer = require(__dirname + '/../models/beer')
var User = require(__dirname + '/../models/user');

describe('beer routes', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

    before(function(done) {
      var user = new User();
      user.username = 'test';
      user.basic.username = 'test';
      user.generateHash('foobar123', function(err, res) {
        if (err) throw err;
        user.save(function(err, data) {
          if (err) throw err;
          user.generateToken(function(err, token) {
            if (err) throw err;
            this.token = token;
            done();
          }.bind(this));
        }.bind(this));
      }.bind(this));
    });

  it('should be able to create a beer', function(done) {
    var beerData = {brand: 'test brand', token: this.token};
    chai.request('localhost:3000')
    .post('/api/beers')
    .send(beerData)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.brand).to.eql('test brand');
      expect(res.body).to.have.property('_id');
      done();
    });
  });

  it('should be able to get all beers', function(done) {
    chai.request('localhost:3000')
    .get('/api/beers')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.eql(true);
      done();
    });
  });

  describe('needs a beer', function() {
    beforeEach(function(done) {
      (new Beer({name: 'test beer', token: this.token})).save(function(err, data) {
        expect(err).to.eql(null);
        this.beer = data;
        done();
      }.bind(this));
      });

    it('should be able to modify a beer', function(done) {
      chai.request('localhost:3000')
      .put('/api/beers/' + this.beer._id)
      .send({brand: 'a new test brand', token: this.token})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('success!');
        done();
      });
    });

    it('should remove a beer', function(done) {
      chai.request('localhost:3000')
      .delete('/api/beers/' + this.beer._id)
      .set('token', this.token)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('success!');
        done();
      });
    });
  });
});
