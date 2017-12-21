//const MongoClient = require('mongodb').MongoClient;

// destructing constructing from an objects attribute
// MongoClient = require('mongodb').MongoClient;
// ObjectID = require('mongodb').ObjectID;
const {MongoClient, ObjectID} = require('mongodb');

// // destructor example es6
// let user = {
//     name: 'joe',
//     age: 25
// }
//
// var {name} = user;
//console.log(name);

// connect to the mongoDB and create the TodoApp database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log('Connecting to MongoDB server failed');
    }

    console.log('Connected to MongoDB server');

    // query for specific _id toDo
    // db.collection("Todos").find({
    //     _id: new ObjectID('5a3b152f9ee6eafa9c93d0ac')}).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => { // error handler
    //    console.log('Failed to fetch toDos', err)
    // });

    // db.collection("Todos").find().count().then( (count) => {
    //     console.log(`Todos: count = ${count}`);
    //
    // }, (err) => { // error handler
    //     console.log('Failed to fetch toDos', err)
    // });

    db.collection("Users").find({name: 'joe'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => { // error handler
        console.log('Failed to fetch toDos', err)
    });

    //db.close();

});