module.exports = exports = function(app) {
  app.filter('listify', function() {
    return function(input) {
      input[0].toUpperCase() + input.slice(1, input.length) + ' List';
    };
  });
};
