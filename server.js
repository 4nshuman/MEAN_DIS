var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var jwt = require('jsonwebtoken');

var User = require('./models/user.model');
var Profiles = require('./models/profiles.model');
var userUploadProfiles = require('./models/userUploadProfiles.model');
var checkAuth = require('./tokenAuthenticate');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var db = 'mongodb://localhost/DIS_User_DB'
mongoose.connect(db, (err, data)=>{
    console.log('connected to mongodb.');
})

app.get('/api/listUsers', function (req, res) {
    console.log(req.connection.remoteAddress);
   User.find( (err, data) => {
       res.json(data);
   })
})

app.post('/api/signIn', function (req, res) {
    console.log(req.connection.remoteAddress);
    console.log(req.body['racfID']);
    User.find(function (err, data) {
        try{
            signInResponse = {
                _id: null,
                userName: null,
                racfID: null
            };
            for (keys in data){
                if(req.body['racfID'] == data[keys]['racfID'] && req.body['loginpswrd'] == data[keys]['password']){
                    signInResponse = {
                        _id: data[keys]['_id'],
                        userName: data[keys]['name'],
                        racfID: data[keys]['racfID']
                    };
                    signInToken = jwt.sign(signInResponse,'secret');
                    return res.status(200).json({token: signInToken, auth: true});
                }
            }
            signInToken = jwt.sign(signInResponse,'secret');
            return res.status(401).json({token: "null", auth: false});
        }catch(err){
            console.log('in catch');
            res.json({status: 'sign in failure'});
        }
    });
 })

 app.post('/api/dashboard', checkAuth, function (req, res) {
    res.json({auth:'success', userName: req.userDecodedData.userName});
 })

 app.post('/api/getUserUploadProfile', checkAuth, function (req, res) {
    userUploadProfiles.findOne(
        {racfID: req.userDecodedData.racfID},
        (err, data) => res.status(200).json(data)
    );
 })




 //Certificate installation on server
var key = fs.readFileSync('./encryption/localhost.key');
var cert = fs.readFileSync( './encryption/localhost.crt' );
//var ca = fs.readFileSync( './encryption/intermediate.crt' );

var options = {
    key: key,
    cert: cert
  };

var https = require('https');
https.createServer(options, app).listen(4430, () => console.log('HTTP Secure Server started'));

var http = require('http');
http.createServer(app).listen(8081, () => console.log('HTTP Server started'));

/* var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

}) */