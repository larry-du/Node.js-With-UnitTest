const umleven = require('./Q5-module')
const rl = require('./readline');

(function askQuestion(rl) {
    rl.question('請輸入 4 以上偶數:', strInput => {
        try {
            result = umleven(strInput);
            console.log(result);
            rl.close();
        } catch (error) {
            console.log(error.message);
            askQuestion(rl);
        }
    });
})(rl);