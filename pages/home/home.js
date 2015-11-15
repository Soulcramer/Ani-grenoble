"use strict";
exports.get = function(request, response) {
  let sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('./data/ani.db', function(err) {
      if (err) {
        console.log("erreur lors de l'ouverture.");
        console.log(err);
      } else {
        console.log("bd ouverte");
      };
    });
  db.all('SELECT * FROM article', function(err, art) {
    if (err) {
      console.log(err);
      response.render({
        articles: art,
        user: {
          name: "scott",
          pass: "pacat"
        }
      });
    } else {
      console.log("The articles are returned");
      response.render({
        articles: art
      });
    }
  })
}
