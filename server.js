'use strict';

var _kkboxJsSdk = require('@kkbox/kkbox-js-sdk');

var client_id = "ded4fc96b6e725f6dlef35a3c615b460";
var client_secret = "9089bdbc62ac2306591000d605662e7a";


var http = require('http')
var express = require('express');
var app = express();
var server = http.createServer(app);
app.use(express.static(__dirname + '/public'));
/*
app.get('/', function(request, response){
	response.end('Hello');
});
*/
server.listen(8080, '127.0.0.1', function(){
	console.log('Http working on 127.0.0.1:8080')
});

//import {Auth, Api} from '@kkbox/kkbox-js-sdk';

// Create an auth object with client id and secret


var auth = new _kkboxJsSdk.Auth(client_id, client_secret);








var access_token = "Tc3c2Pt97jIvl26uiZkVrg=="
  // Create an API object with your access token
  var api = new _kkboxJsSdk.Api(access_token);
/*
  // Fetch content with various fetchers
  api.searchFetcher.setSearchCriteria('五月天 派對動物', 'track').fetchSearchResult(4,5).then(function (response) {
	
    // Content from the KKBOX Open API
    console.log(response.data);

    // Continue to the next page
    api.searchFetcher.fetchNextPage(response).then(function (response) {
      console.log(response.data);
    }).catch(err => {console.log("nextpage"); console.log(err)});
  });
*/  

