'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userUploadProfileSchema = new Schema({
    _id: String,
    racfID : {
        type: String,
        unique: true
        },
    uploadProfileID : [{
        id: Number,
        profile: String
    }]
});

module.exports = mongoose.model('userUploadProfile',userUploadProfileSchema);