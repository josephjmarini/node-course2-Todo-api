//const MongoClient = require('mongodb').MongoClient;

// destructing
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

    // create a table/collection
    // db.collection("Todos").insertOne({
    //     test: 'Something to 222 do',
    //     completed: false
    // }, (err, result) => {
    //
    //     if (err) {
    //         return console.log('Can not insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //
    // });

    //Insert new doc into Users (name, age, location
    db.collection("Users").insertOne({
        name: 'maria',
        age: 32,
        location: 'NH'
    }, (err, result) => {

        if (err) {
            return console.log('Can not insert todo', err);
        }

         console.log(JSON.stringify(result.ops[0]._id, undefined
             , 2));
    });

    db.close();

});