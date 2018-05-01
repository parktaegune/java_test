const myBrain = require('./myBrain');
const myData = require('./twitterDonKimTyson');

let trainedNet = myBrain.train(myData.trainingData);

function execute(input) {
    let result = myBrain.getResult(trainedNet, input);
    console.log('trump = ' + Math.round(result.trump * 100) + '%, kardashian = ' + Math.round(result.kardashian * 100) +
        '%, tyson = ' + Math.round(result.tyson * 100) + '%');
    let output;
    if (result.trump > result.kardashian)
        output = (result.trump > result.tyson) ? 'Trump' : 'Tyson';
    else
        output = (result.kardashian > result.tyson) ? 'Kardashian' : 'Tyson';
    return output;
}

console.log('Writer = ' + execute("These aren't real. Kanye would never write Yeezy on the side"));
console.log('Writer = ' + execute("What does the Department of Justice and FBI have to hide?"));
console.log('Writer = ' + execute("Science Literacy is not only about what you know, it's about your depth of curiosity, and your capacity to evaluate evidence."));
