var mongoose = require('mongoose');

// ftiaxnw to collection Users
var Users = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = { Users };