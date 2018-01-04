let express = require('express');
let bodyParser = require('body-parser');


// using es6 desctructering
var {mongoose} = require('./db/mongoose.js');
//var mongoose = require('./db/mongoose.js').mongoose;
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


let app = express();

app.use(bodyParser.json());

// create a todo using post method
app.post('/todos', (req, res) => {

    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        //console.log(JSON.stringify(doc, undefined, 2));
    }, (e) => {
        res.status(400).send(e);
        //console.log("unabel to save todo", e);
    });

    console.log(req.body);
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});


// var newTodo = new Todo({
//     text: 'Cook dinner at 7:00 pm',
//     completed: true,
//     completedAt: new Date().getTime()
// });
//
// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log("unabel to save todo", e);
// });

// var newUser = new User({
//      email: '  ginamarini@msn.com '
// });
//
// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log("Unabel to save user", e);
// });





