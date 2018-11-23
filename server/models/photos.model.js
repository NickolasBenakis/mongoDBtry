var mongoose = require('mongoose');


const ImageSchema = mongoose.Schema({
    type: String,
    data: Buffer
});

var photos = mongoose.model('photos', ImageSchema);


// kanw export tin vasi me eikona
module.exports = { photos };