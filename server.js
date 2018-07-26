'use strict';
var _kkboxJsSdk = require('@kkbox/kkbox-js-sdk');

var client_id = "ded4fc96b6e725f6dlef35a3c615b460";
var client_secret = "9089bdbc62ac2306591000d605662e7a";


const express = require('express')
const app = express()

const port = 10130


const bodyParser = require('body-parser')//post
const https = require('https')
const fs = require('fs')
/*const mysql = require('mysql')*/
/*
var WebSocketServer = require('ws').Server;
*/

//read json file
/*var fs = require("fs");
var content = fs.readFileSync("./public/name.json");
var jsonfile=JSON.parse(content);*/

app.use(bodyParser.json());    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true}));//to support URL-encided bodies

app.use(express.static(__dirname + '/public'));

const options = {
  key: fs.readFileSync('/home/uidd2018/ssl/private.key'),
  cert: fs.readFileSync('/home/uidd2018/ssl/certificate.crt'),
  ca: fs.readFileSync('/home/uidd2018/ssl/ca_bundle.crt')
};

var server = https.createServer(options, app).listen(port)

/*var w = new WebSocketServer({server});*/


/*
var http = require('http')
var express = require('express');
var app = express();
var server = http.createServer(app);
app.use(express.static(__dirname + '/public'));*/

/*
app.get('/', function(request, response){
	response.end('Hello');
});
*/
/*
server.listen(8080, '127.0.0.1', function(){
	console.log('Http working on 127.0.0.1:8080')
});
*/
//import {Auth, Api} from '@kkbox/kkbox-js-sdk';

// Create an auth object with client id and secret


var auth = new _kkboxJsSdk.Auth(client_id, client_secret);








var access_token = "Tc3c2Pt97jIvl26uiZkVrg=="
  // Create an API object with your access token
var api = new _kkboxJsSdk.Api(access_token)

function func_Page(iSearch, iRight, iLeft){
  var MyObj = this;
  MyObj.searchpart = iSearch;
  MyObj.rightpart = iRight;
  MyObj.leftpart = iLeft;
};



app.post('/getpage', function(req, res){
  if(req.body.index == 1){
    var Page = new func_Page("1",
       "<h2>推薦歌曲</h2>",
        "1")
    res.send(Page)
  }
  else if(req.body.index == 2){
    var Page = new func_Page("2", "2", "2")
    res.send(Page)
  }
  else if(req.body.index == 3){
    var Page = new func_Page("3", "3", "3")
    res.send(Page)
  }
  else if(req.body.index == 4){
    var Page = new func_Page("4", "4", "4")
    res.send(Page)
  }
  else if(req.body.index == 5){
    var Page = new func_Page("5", "5", "5")
    res.send(Page)
  }
  else if(req.body.index == 6){
    var Page = new func_Page("6", "6", "6")
    res.send(Page)
  }
    
})

api.chartFetcher.fetchCharts().then((data)=>{console.log(data.data)})
 
