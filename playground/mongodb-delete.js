const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Theofilis', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log("Success ! Connected to MongoDB server!");


 //   //deleteMany 'deletes all the elements that match the criteria'

    // db.collection('contacts').deleteMany({ name: "apostolis" }).then((res) => {
    //     console.log(res);
    // });

  //  //deleteOne "deletes the first element that matches the criteria and then it stops"

    // db.collection('contacts').deleteOne({ name: "nikos" }).then((res) => {
    //     console.log(res);
    // });

    //findOne and delete
    db.collection('contacts').findOneAndDelete({ _id: new ObjectID("5bd81e12be1e9d2760f3de7e") }).then((res) => {
        console.log(res);
    });

    //  db.close();
});
