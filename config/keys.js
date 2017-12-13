if (process.env.NODE_ENV === 'production') {
  // return ENV from heroku
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}
