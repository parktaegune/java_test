//parktaegune Nodejs

let nPort = 8000;
let sHos = 'localhost'
const myServer = require('./myServer');
const myRouter = require('./myRouter');
const myHandle = require('./myRouter');
let handle = {};

myServer.start(nPort.sHost,myRouter);