var http = require('http');
var node_static = require('node-static');
var file_server = new node_static.Server('.');
var server = http.createServer(function(request, response)
{
    request.addListener('end', function()
    {
        file_server.serve(request, response);
    }).resume();
});
server.listen(8080);
