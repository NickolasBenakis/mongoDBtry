const { mongoose } = require('../server/db/mongoose');
const { Users } = require('../server/models/users');


var id = '5bdac15fca48513431022eaf';

Users.find({
    _id: id
}).then((users) => {
    console.log('Users', users)
});

Users.findOne({
    _id: id
}).then((user) => {
    console.log('User', user);
});
