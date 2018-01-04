var mongoose = require('mongoose');

// promis
mongoose.Promis = global.Promis;

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/TodoAapp');


module.exports = {
    mongoose: mongoose
};
