'use strict';

var express = require('express'),
	http = require('http'),
	path = require('path'),
	async = require('async'),
	hbs = require('express-hbs'),
	baucis = require('baucis'),
	mongoose = require('mongoose'),
	oauth = require('oauth'),
	config = require('./config.js');

var sys = require('util');
var app = express();

// all environments
app.configure(function(){
  // app.set('port', config.PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.cookieSession({  secret: config.EXPRESS_SESSION_SECRET, cookie: { maxAge: 60 * 60 * 1000 } }));
  app.use(function(req, res, next){
      res.locals.user = req.session.user;
      next();
    });
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/** BEGIN OAUTH **/
// TODO: Move into module.
var _tumblrConsumerKey = config.TUMBLR_CONSUMER_KEY,
    _tumblrConsumerSecret = config.TUMBLR_CONSUMER_SECRET;

function consumer() {
  return new oauth.OAuth(
    'http://www.tumblr.com/oauth/request_token', 
    'http://www.tumblr.com/oauth/access_token', 
     _tumblrConsumerKey, 
     _tumblrConsumerSecret, 
     "1.0A", 
     'http://localhost:3000/sessions/callback', 
     "HMAC-SHA1"
   );
}

app.get('/sessions/connect', function(req, res){
  consumer().getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){ //callback with request token
    if (error) {
      res.send("Error getting OAuth request token : " + sys.inspect(error), 500);
    } else { 
      sys.puts("results>>"+sys.inspect(results));
      sys.puts("oauthToken>>"+oauthToken);
      sys.puts("oauthTokenSecret>>"+oauthTokenSecret);
 
      req.session.oauthRequestToken = oauthToken;
      req.session.oauthRequestTokenSecret = oauthTokenSecret;
      res.redirect("http://www.tumblr.com/oauth/authorize?oauth_token="+req.session.oauthRequestToken);    
    }
  });
});

app.get('/sessions/callback', function(req, res){
  sys.puts("oauthRequestToken>>"+req.session.oauthRequestToken);
  sys.puts("oauthRequestTokenSecret>>"+req.session.oauthRequestTokenSecret);
  sys.puts("oauth_verifier>>"+req.query.oauth_verifier);
  consumer().getOAuthAccessToken(
    req.session.oauthRequestToken, 
    req.session.oauthRequestTokenSecret, 
    req.query.oauth_verifier, 
    function(error, oauthAccessToken, oauthAccessTokenSecret, results) { //callback when access_token is ready
    if (error) {
      res.send("Error getting OAuth access token : " + sys.inspect(error), 500);
    } else {
      req.session.oauthAccessToken = oauthAccessToken;
      req.session.oauthAccessTokenSecret = oauthAccessTokenSecret;
      consumer().get("http://api.tumblr.com/v2/user/info/", 
                      req.session.oauthAccessToken, 
                      req.session.oauthAccessTokenSecret, 
                      function (error, data, response) {  //callback when the data is ready
        if (error) {
          res.send("Error getting twitter screen name : " + sys.inspect(error), 500);
        } else {
          res.redirect('/');
        }  
      });  
    }
  });
});
/** END OAUTH **/

/** BEGIN AUTHENTICATED TUMBLR API CALLS */

app.get('/tumblr/user/info', function(req, res){
  consumer().get("http://api.tumblr.com/v2/user/info/", 
                  req.session.oauthAccessToken, 
                  req.session.oauthAccessTokenSecret, 
                  function (error, data, response) {  //callback when the data is ready
    if (error) {
      res.send(500, { error: 'request failed' });
    } else {
      res.set('Content-Type', 'application/json');
      res.send(data);
    }  
  });
});

/** END TUMBLR API **/

// set logging
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// mount static
app.use(express.static( path.join( __dirname, '../app') ));
app.use(express.static( path.join( __dirname, '../.tmp') ));


// route to index.html
app.get('/', function(req, res){
  if (!req.session.oauthAccessToken) {
    console.log('no access token. redirecting to oauth');
    res.redirect('/sessions/connect');
  }
  res.sendfile( path.join( __dirname, '../app/index.html' ) );
});

//http://www.flickr.com/services/api/flickr.photos.search.html
//http://www.tumblr.com/docs/en/api/v2#posting

app.listen(parseInt(config.PORT, 10));


