//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/Theofilis', (err, db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB server');
  }
  console.log("Success ! Connected to MongoDB server!");

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to Instert Todo', err);
  //   }

  // destructuring example es6
  // // start
  //   var user = { 
  //     name: "nick",
  //     identity: "AE41534",
  //     age: 25 
  // }
  // var {age} = user;
  // console.log(age);
  // // end


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
      console.log(JSON.stringify(res.ops, undefined, 2));
    });
  db.collection('Todos list').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));

  }, (err) => {
    console.log('Unable to fetch todos', err);
  })



  db.close();
});
