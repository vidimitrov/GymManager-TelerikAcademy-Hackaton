var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientCardSchema = new Schema({
    name: String,
    email: String,
    photo: String,
    creationDate: String, //Date,
    lastUpdate: String, //Date,
    paidPeriod: Number, //Number of paid days 
    gym: {type: Schema.Types.ObjectId, ref: 'Gym'}
});

module.exports = mongoose.model('ClientCard', ClientCardSchema);