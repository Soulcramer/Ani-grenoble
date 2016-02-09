'use strict';

let aero = require('aero')
let app = aero()
let passport = require("passport")
let session = require("express-session")
let fs = require('fs')
//let apiKeys = JSON.parse(fs.readFileSync('security/api-keys.json'))
let FacebookStrategy = require('passport-facebook').Strategy
let facebookConfig = Object.assign({
    callbackURL: '/auth/facebook/callback',
    enableProof: false
  },
  apiKeys.facebook
)

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
