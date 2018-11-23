
var express = require('express');
var bodyParser = require('body-parser');


var { mongoose } = require('./db/mongoose.js');
var { Contacts } = require('./models/contacts.js');
var { Users } = require('./models/users.js');

var app = express();
// set up gia Heroku
const port  = process.env.PORT || 3000;


//ksekinaei to middleware
app.use(bodyParser.json());

//postarw to path kai to response stin porta
app.post('/users', (req, res) => {
    // var contact = new Contacts({
    //     name: req.body.name,
    //     age: req.body.age,
    //     phone: req.body.phone
    // });
    // contact.save().then((doc) => {
    //     res.send(doc);
    // }, (err) => {
    //     res.status(400).send(err);
    // });
    var user = new Users({
        email: req.body.email
    });
    user.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
        // res.status(400).send((results[0].id).toString());
    });

});
app.get('/users', (req, res) => {
    Users.find().then((users) => {
        res.send({ users })
    }, (err) => {
        res.status(400).send(err);
    })
});


//anoigw tin porta 
app.listen(port, () => {
    console.log(`Start at port ${port}`);
});

module.exports = { app };

// var {mongoose} = require('./db/mongoose.js');


// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/contacts');


// save new something


// // var newContact = new Contacts({
// //     name: "manolis", age: 38, phone: "699964567"
// // });

// // newContact.save().then((res) => {
// //     console.log(JSON.stringify(res, undefined, 2));
// // }, (e) => {
// //     console.log('unable to save contact');
// // })
// var otherContact = new Contacts({});
// otherContact.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2));
// }, (e) => {
//     console.log('unable to save contact', e);
// })

// create a user
//email  require it trim it set type set min length of 1
// var User = mongoose.model('Users', {
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     }
// });


// var newUser = new User({
//     email: "manolis@gmail.com          "
// })
// newUser.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2));
// }, (e) => {
//     console.log("Unable to save user", er);
// })



// ICE- server below

