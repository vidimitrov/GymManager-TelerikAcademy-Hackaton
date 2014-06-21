var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    role: String,
    gym: {type: Schema.Types.ObjectId, ref: 'Gym'}
});

module.exports = mongoose.model('User', UserSchema);