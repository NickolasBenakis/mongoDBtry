const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Theofilis', (err, db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log("Success ! Connected to MongoDB server!");

  db.collection('Todos list').insertMany([
    {
      title: "Eat"
    },
    {
      title: "Sleep"
    },
    {
      title: "Code"
    }]
    , (err, res) => {
      if (err) {
        console.log("Unable to Connect");
      }
      console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    });

  db.close();
});
