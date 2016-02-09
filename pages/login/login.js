'use strict'

module.exports = {
   get: function(request, response) {

      response.render({
         user: "haha"
      })

   }/*,
   post: function(request, response) {

      //if(request.body.username==users)
      response.render({
         user: {
            name: request.body.username,
            pass: request.body.password
         }
      })
   }*/

}
