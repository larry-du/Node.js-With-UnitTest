const main = require('./Q7-module');
const rl = require('./readline');

(function askQuestion(rl) {
    rl.question('請輸入數字8:', strInput => {
        let resultOfStar = main(strInput).completeNormalStar;
        let resultOfTurnStar = main(strInput).completeTurnStar;
        console.log(resultOfStar);
        console.log(resultOfTurnStar);
        rl.close();
    });
})(rl);