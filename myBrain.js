const brain = require('./brain');
//let trainedNet;

function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data) {
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    console.log('Finished training based on brain.js!');
    //    trainedNet = net.toFunction();
    return net.toFunction();
};

function getResult(trainedNet, input) {
    return trainedNet(encode(input));
}

exports.encode = encode;
exports.processTrainingData = processTrainingData;
exports.train = train;
exports.getResult = getResult;