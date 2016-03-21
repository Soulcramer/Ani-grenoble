"use strict";
exports.get = function(request, response) {
  let sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('./data/ani.db', function(err) {
      if (err) {
        console.log("Error during the oppening of the Db.");
        console.log(err)
      } else {
        console.log("Db successfully opened");
      }
    })
  db.all('SELECT * FROM article ORDER BY ref DESC', function(err, art) {
    if (err) {
      console.log(err)
      response.render({
        articles: art,
        user: request.user
      })
    } else {
      console.log("The articles are returned");
      response.render({
        articles: art
      })
    }
  })
}
