var mongoose = require('mongoose');

// mongoose settings
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contacts');

module.exports = { mongoose };
