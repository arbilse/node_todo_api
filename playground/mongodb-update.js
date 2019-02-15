const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true } , (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c6747e02df7b72cd857b94b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

// challenge
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c6607108a3c6b6b284a2899')
  }, {
    $set: {
      name: 'Wendy_Updated'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  client.close();
});
