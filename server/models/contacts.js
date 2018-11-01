var mongoose = require('mongoose');


// ftiaxnw to collection Contacts
var Contacts = mongoose.model('Contacts', {
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    age: {
        type: Number
    },
    phone: {
        type: String
    }
});

module.exports = { Contacts };