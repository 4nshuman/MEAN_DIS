var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var jwt = require('jsonwebtoken');

var User = require('./models/user.model');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var db = 'mongodb://localhost/DIS_User_DB'
mongoose.connect(db, (err, data)=>{
    console.log('connected to mongodb.');
})

app.get('/api/listUsers', function (req, res) {
   User.find( (err, data) => {
       res.json(data);
   })
})

app.post('/api/signIn', function (req, res) {
    User.find(function (err, data) {
        console.log(req.headers.authentication);
        for (keys in data){
            if(req.body['racfID'] == data[keys]['racfID'] && req.body['loginpswrd'] == data[keys]['password']){
                signInResponse = {
                    _id: data[keys]['_id'],
                    userName: data[keys]['name'],
                    racfID: data[keys]['racfID']
                };
                break;
            }
            else{
                signInResponse = {
                    _id: null,
                    userName: null,
                    racfID: null
                };
            }
        }
        signInToken = jwt.sign(signInResponse,'secret');
        try{
            res.json({token: signInToken, auth: true});
        }
        catch(ex){
            console.log('in catch');
            res.json({status: 'sign in failure'});
        }
    });
 })

 app.get('/api/dashboard', function (req, res) {
     res.end("test");
 })


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})