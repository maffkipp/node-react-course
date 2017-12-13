const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('this is the home page');
});

app.listen(PORT);
