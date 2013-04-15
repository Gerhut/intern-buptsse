
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema Definition Section

var userSchema = Schema({

    // Un-activicated User
    idnumber: {type: String, required: true, unique: true},
    realname: {type: String, required: true, unique: true},
    role    : {type: String, required: true, unique: true},

    email   : String,
    password: String,

    avatar  : String,
    phone   : String,

    // For Students
    applied : {type: Schema.Types.ObjectId, ref: 'Job'},
    company : {type: Schema.Types.ObjectId, ref: 'Job'},
    resume  : String,
    homepage: String,

    // For Teacher
    position: [{type: Schema.Types.ObjectId, ref: 'Job'}],

});

var jobSchema = Schema({

    // Meta Information
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Number, default: Date.now},

    title   : String,
    company : {
        name    : String,
        site    : String,
        location: [Number],
        address : String,
        email   : String,
        phone   : String,
    },
    content : String, 
    need    : Number,
    start_at: Number,

    // Students
    applier : [Schema({
        user    : {type: Schema.Types.ObjectId, ref: 'User'},
        accepted: {type: Boolean, default: false},
        reports : [String],
        grade   : Number,
    })],

});

// End Definition of Schema

module.exports = {
    User    : mongoose.model('User', userSchema),
    Job     : mongoose.model('Job', jobSchema),
};

