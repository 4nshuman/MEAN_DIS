'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: String,
    UID: Number,
    name : String,
    racfID : {
        type: String,
        unique: true
        },
    password : String,
    profession : String
});

module.exports = mongoose.model('user',userSchema);