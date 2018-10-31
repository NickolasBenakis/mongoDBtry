const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Theofilis', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log("Success ! Connected to MongoDB server!");


    db.collection('contacts').findOneAndUpdate({ name: "Ben10" }, { $set: { name: "NickolasBen" }, $inc: { age: 10 } }, { returnOriginal: false }).then((res) => {
        console.log(res);
    });
    //   // $inc " increments a value inside the json"

    // db.collection('contacts').findOneAndUpdate({ name: "Ben10" }, { $inc: { age: 2 } }, { returnOriginal: false }).then((res) => {
    //     console.log(res);
    // });


    //  db.close();
});
