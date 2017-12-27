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


    // db.collection("Todos").findOneAndUpdate(
    //     {
    //         _id: new ObjectID("5a3c4dda9ee6eafa9c9422c1")
    //     },
    //     { // update operator
    //         $set:{
    //             text: "eat lunch every day",
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then( (result) => {
    //
    //         console.log(result);
    //
    // });

    db.collection("Users").findOneAndUpdate(
        {
            _id: new ObjectID("5a39c3fd74460f1a94831c3c")
        },
        { // update operator
            $set:{
                name: "Joseph",
                location: "Milford, NH"
            },
            $inc:{
                age: 10
            }
        },
        {
            returnOriginal: false
        }).then( (result) => {
        console.log(result);

    });


    // db.collection("Users").findOneAndUpdate(
    //     {
    //         _id: new ObjectID("5a39c3fd74460f1a94831c3c")
    //     },
    //     { // update operator
    //         $inc:{
    //             age: 10
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then( (result) => {
    //     console.log(result);

    //});

    db.close();

});