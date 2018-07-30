'use strict';
var _kkboxJsSdk = require('@kkbox/kkbox-js-sdk');

var client_id = "ded4fc96b6e725f6dlef35a3c615b460";
var client_secret = "9089bdbc62ac2306591000d605662e7a";


const express = require('express')
const app = express()

const port = 10125


const bodyParser = require('body-parser')//post
const https = require('https')
const fs = require('fs')
//var content = require("./page.txt")
//console.log(content)

/*const mysql = require('mysql')*/
/*
var WebSocketServer = require('ws').Server;
*/

//read json file
//var content = fs.readFileSync("./page_txt/pg1.txt", "utf8");
//var jsonfile=JSON.parse(content)

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


//var auth = new _kkboxJsSdk.Auth(client_id, client_secret);



var util = require("util")



var nowPage = 1
var access_token = "Tc3c2Pt97jIvl26uiZkVrg=="
  // Create an API object with your access token
var api = new _kkboxJsSdk.Api(access_token)
var chart = {}
// object page and constructor
function func_Page(iSearch, iLeft, iRight){
  var MyObj = this;
  MyObj.searchpart = iSearch;
  MyObj.leftpart = iLeft;
  MyObj.rightpart = iRight;
};

var page4_num = 0
app.post('/getpage', function(req, res){

  nowPage = req.body.index
  var pagedefault = fs.readFileSync("./page_txt/pg" + req.body.index + ".txt", "utf8")
  var Pagepart = [
    pagedefault.search("//search"),
    pagedefault.search("//body-left"),
    pagedefault.search("//body-right"),
    pagedefault.search("//end")
  ]
  var Page = new func_Page(
      pagedefault.substring(Pagepart[0] + 8, Pagepart[1]),
      pagedefault.substring(Pagepart[1] + 11, Pagepart[2]),
      pagedefault.substring(Pagepart[2 ]+ 12, Pagepart[3])
  )
  var Pack
  //chart
  if(req.body.index == 4){
    api.chartFetcher.fetchCharts().then((data)=>{
      chart = JSON.parse(JSON.stringify(data.data.data))
      Pack = {chart: chart, Page, total: data.data.summary.total}
      //console.log(Pack.Page.rightpart)
      res.send(Pack)
    })
  }
  

  
})


api.chartFetcher.fetchCharts().then((data)=>{console.log(data.data.summary)})
 
