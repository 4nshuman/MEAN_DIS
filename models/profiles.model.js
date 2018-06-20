'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
    _id: String,
    profileName: String,
    profileDesc: String,
    profileID: {
        type: Number,
        unique: true
    }
});

module.exports = mongoose.model('profile', profileSchema);