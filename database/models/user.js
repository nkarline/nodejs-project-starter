const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        trim: true
    },
    email: String,
    working: {
        type: Boolean,
        default: false
    },
    registeredAt: {
        type: Date,
        default: null
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
