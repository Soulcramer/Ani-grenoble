exports.get = function(request, response) {
  response.render({
    myJadeParameter: 'Hello World'
  })
}
