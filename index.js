'use strict';

let aero = require('aero')
let app = aero()
/*let passport = require("passport")
let session = require("express-session")
let fs = require('fs')
//let apiKeys = JSON.parse(fs.readFileSync('security/api-keys.json'))
let FacebookStrategy = require('passport-facebook').Strategy
let facebookConfig = Object.assign({
    callbackURL: '/auth/facebook/callback',
    enableProof: false
  },
  apiKeys.facebook
)*/

/*<<<<<<< HEAD
// Facebook
passport.use(
  new FacebookStrategy(
    facebookConfig,
    function(accessToken, refreshToken, profile, done) {
      done(null, profile)
    }
  )
)

passport.serializeUser(function(user, done) {
  console.log('serialize', user)
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  console.log('deserialize', id)
  done(null, {
    id
  })
})

let sessionOptions = {
  name: 'sid',
  secret: 'keyboard cat', //require('crypto').randomBytes(64).toString('hex'),
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: false
  }
}

// Middleware
app.use(
  session(sessionOptions),
  passport.initialize(),
  passport.session()
)

// Start the server
app.run()

// Facebook login
app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: [
    'email',
    'public_profile'
  ]
}))

// Facebook callback
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/fail'
  })
)

// Logout
app.get('/logout', function(req, res) {
  req.logout()
  res.redirect('/')
})
=======*/
// Db tests
/*let sqlite3 = require('sqlite3').verbose(),
  db = new sqlite3.Database('./data/ani.db', function(err) {
    if (err) {
      console.log("erreur lors de l'ouverture.");
      console.log(err);
    } else {
      console.log("bd ouverte");
    };
  });
db.all('SELECT * FROM membreBureau', function(err, mB) {
  if (err !== null) {
    // Express handles errors via its next function.
    // It will call the next operation layer (middleware),
    // which is by default one that handles errors.
    console.log(err);
  } else {
    console.log(mB);
    var users=mB;
  }
});*/




app.run();
