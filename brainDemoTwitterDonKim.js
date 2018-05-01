const myBrain = require('./myBrain');
const myData = require('./twitterDonKim');

let trainedNet = myBrain.train(myData.trainingData);

function execute(input) {
    let result = myBrain.getResult(trainedNet, input);
    let output = result.trump > result.kardashian ? 'Trump' : 'Kardashian';
    console.log('trump = ' + Math.round(result.trump*100) + '%, kardashian = ' + Math.round(result.kardashian*100) + '%');
    return output;
}

console.log('Writer = ' + execute("These aren't real. Kanye would never write Yeezy on the side"));
console.log('Writer = ' + execute("Whether we are Republican or Democrat, we must now focus on strengthening Background Checks!"));
