'use strict';

let aero = require('aero');
aero.use(require('body-parser').urlencoded({
	extended: false
}))
aero.run();
