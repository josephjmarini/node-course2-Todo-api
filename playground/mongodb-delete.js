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

    // deleteMany
    // db.collection("Todos").deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection("Todos").deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection("Todos").findOneAndDelete({text: "eat lunch"}).then((result) => {
    //     console.log(result);
    // });


    // db.collection("Todos").deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").deleteMany({name: 'maria'}).then((result) => {
        console.log(result);
    });

    //_id: new ObjectID('5a3b152f9ee6eafa9c93d0ac')

    db.collection("Users").deleteOne({_id: new ObjectID("5a39c481c876e035f0f92b93")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // db.collection("Users").find({name: 'joe'}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => { // error handler
    //     console.log('Failed to fetch toDos', err)
    // });

    //db.close();

});