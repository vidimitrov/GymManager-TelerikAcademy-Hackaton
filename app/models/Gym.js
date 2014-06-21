var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GymSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Gym', GymSchema);