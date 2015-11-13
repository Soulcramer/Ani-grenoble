'use strict';

let aero = require('aero');
aero.use(require('body-parser').urlencoded({
  extended: false
}));

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




aero.run();
