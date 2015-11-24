var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var eat = require('eat');

var userSchema = new mongoose.Schema({
  username: String,
  auth: {
    basic: {      // called basic because we could have mult auth schemes and 2. we dont want to send this back
      username: String,
      password: String
    }
  }
});

userSchema.methods.generateHash = function(password, callback) {
  bcrypt.hash(password, 8, function(err, has) {
    if (err) return callback(err);
    this.username.basic.password = hash;
    callback(null, hash);
  }.bind(this));
};

userSchema.methods.compareHash = function(password, callback) {
  return bcrypt.compare(password, this.basic.password, callback);
};

userSchema.methods.generateToken = function(callback) {
  var id = this._id;
  eat.encode({id: id}, process.env.APP_SECRET, callback);
};

module.exports = mongoose.model('User', userSchema);


 userSchema.methods.hashPassword = function() {
     var hash = this.auth.basic.password = bcrypt.hashSync(this.auth.basic.password,8);
     return hash;
};

   userSchema.methods.checkPassword = function(password) {
     return bcrypt.compareSync(password, this.auth)
   }
