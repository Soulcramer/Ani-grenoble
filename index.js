'use strict';

let aero = require('aero');
aero.use(require('body-parser').urlencoded({
  extended: false
}));

aero.run();

aero.get('/', (req, res) => res.redirect('/home'))
