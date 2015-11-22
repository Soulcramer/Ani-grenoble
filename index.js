'use strict';

let aero = require('aero');
let passport = require("passport");
let session = require("express-session");

// Database
let sqlite3 = require('sqlite3').verbose();

// Login providers
let LocalStrategy = require('passport-local').Strategy;

aero.use(require('body-parser').urlencoded({
   extended: false
}));



// Accounts
let db = new sqlite3.Database('./data/ani.db', function(err) {
   if (err) {
      console.log("Error during the oppening of the Db.");
      console.log(err)
   } else {
      console.log("Db successfully opened");
   }
})

passport.use(new LocalStrategy({
   // set the field name here
   usernameField: 'username',
   passwordField: 'password'
}, function(username, password, done) {
   db.get("SELECT * FROM membreBureau WHERE pseudo = ? AND mdp = ?", username, password, function(err, row) {
      if (!row) {
         console.log("error")
         return done(null, false)
      }
      console.log(row);
      return done(null, row)
   })
}))



// Serializer
console.log("passport serialize")
passport.serializeUser(function(user, done) {
   console.log(user.pseudo)
   return done(null, user.pseudo)
});

// Deserializer
console.log("passport deserialize")
passport.deserializeUser(function(username, done) {
   db.get("SELECT * FROM users WHERE pseudo = ?", username, function(err, row) {
      if (!row) {
         console.log("echec deserialize");
         return done(null, false)
      }
      console.log("reussite deserialize");
      console.log(row);
      return done(null, row)
   })
})

//if I uncommented this block, i get this error:
/*_http_outgoing.js:346
    throw new Error('Can\'t set headers after they are sent.');
    ^

Error: Can't set headers after they are sent.
    at ServerResponse.OutgoingMessage.setHeader (_http_outgoing.js:346:11)
    at ServerResponse.setWriteHeadHeaders (C:\Users\Scott\Documents\Projets\aero\node_modules\on-headers\index.js:82:19)
    at ServerResponse.writeHead (C:\Users\Scott\Documents\Projets\aero\node_modules\on-headers\index.js:41:36)
    at C:\Users\Scott\Documents\Projets\aero\node_modules\aero\lib\classes\Aero.js:651:16
    at Gzip.onEnd (zlib.js:227:5)
    at emitNone (events.js:72:20)
    at Gzip.emit (events.js:166:7)
    at endReadableNT (_stream_readable.js:905:12)
    at doNTCallback2 (node.js:450:9)
    at process._tickCallback (node.js:364:17)*/

/*
aero.use(
	session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
   }),
	passport.initialize(),
	passport.session()
)*/



aero.run()

aero.get('/', (req, res) => res.redirect('/home'))

aero.post('/login', function(request, response) {
   console.log(request)
   passport.authenticate('local', {
      successRedirect: '/good-login',
      failureRedirect: '/bad-login',
      failureFlash: true
   });
})
