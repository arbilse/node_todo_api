const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {    // remove is deprecated, using deleteMany
// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndDelete({_id: '5c69e9f195773b6c6b7b3cfc'}).then((todo) => {
//   console.log(todo);
// });
//
//
// Todo.findByIdAndDelete('5c69e9f195773b6c6b7b3cfc').then((todo) => {
//   console.log(todo);
// });
