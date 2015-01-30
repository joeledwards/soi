var http = require('http');
var node_static = require('node-static');
var file_server = new node_static.Server('www');

http.createServer(function(request, response) {
    request.addListener('end', function() {
        file_server.serve(request, response);
    })
    .resume();
})
.listen(8080);

