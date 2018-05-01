const queryString = require('querystring');
const myBrain = require('./myBrain');
const myData = require('./twitterDonKim');

let trainedNet = myBrain.train(myData.trainingData);

function sleep(millisec) {
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + millisec);
}
function start(res) {
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    // res.write('Hello, start!');
    // res.end();
    // you shouldn't write html
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '문체를 입력하면 trump, Kardashian을 구분합니다.<br>' +
        '<form action="/hello" method="post">' +
        '<input type="text" name="myName" /><br>' +
        '<button type="submit">입력 완료</button>' +
        '</form>' + '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

function execute(input) {
    let park = 'trump = ' + Math.round(result.trump * 100) + '%, kardashian = ' + Math.round(result.kardashian * 100) + '%<br>';
    let result = myBrain.getResult(trainedNet, input);
    let output = '';
    if(result.trump > result.kardashian) park += '<br>Trump';
    else park += '<br>Kardashian';
    return park;
}

function hello(res, postData) {
    //sleep(20000);
    //asyncronized callback
    /*
    setTimeout(function () {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('Hello, Hello!');
        res.end();
    }, 20000);
    */
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '분석결과, ' + execute(queryString.parse(postData).myName) + '(으)로 판별'
        '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

exports.start = start;
exports.hello = hello;