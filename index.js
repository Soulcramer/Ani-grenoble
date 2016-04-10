'use strict';

let aero = require('aero')
let app = aero()
app.run()

app.get('/', (req, res) => res.redirect('/home'))
