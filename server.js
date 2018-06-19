var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var User = require('./models/user.model');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var db = 'mongodb://localhost/DIS_User_DB'
mongoose.connect(db, (err, data)=>{
    console.log('connected to mongodb.');
})

app.get('/api/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.post('/api/signIn', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        for (keys in data){
            if(req.body['racfID'] == data[keys]['racfID'] && req.body['loginpswrd'] == data[keys]['password']){
                signInResponse = {
                    userID: data[keys]['id'],
                    isValid: true,
                    userName: data[keys]['name'],
                    profession: data[keys]['profession'],
                    racfID: data[keys]['racfID']
                };
                break;
            }
            else{
                signInResponse = {
                    userID: '-1',
                    isValid: false,
                    userName: null,
                    profession: null,
                    racfID: null
                };
            }
        }
        res.json( signInResponse );
    });
 })

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})