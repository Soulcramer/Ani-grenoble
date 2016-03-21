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
app.run()

app.get('/', (req, res) => res.redirect('/home'))
