//parktaegune Nodejs

const http = require('http');
const url = require('url');

exports.start = function (port, hostname,route){
    function onRequest(req, res){
        let sPathname = url.parse(req.url).pathname;
        route(sPathname);
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('Hello,world');
        res.end();
    }
    http.createServer(onRequest).listen(port, hostname);
    console.log('Server running at http://' + sHost + ':' + nPort);
}
exports.start = start;