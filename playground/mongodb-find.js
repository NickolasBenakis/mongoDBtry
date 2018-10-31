const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Theofilis', (err, db) => {
    if (err) {
        return console.log('Unable to Connect to MongoDB server');
    }
    console.log("Success ! Connected to MongoDB server!");


    db.collection('contacts').insertMany([
        {
            "name": "nikos",
            "age": 25
        },
        {
            "name": "marianna",
            "age": 25
        },
        {
            "name": "apostolis",
            "age": 44
        }
    ]

    )

    db.collection('contacts').find({_id: new ObjectID('5bd81c7f27ceea09f0946448')}).toArray().then((docs) => {
        //  console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.close();
});
