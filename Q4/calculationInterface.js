const sumResult = require("./Q4")
const rl = require("./readline");

(function askQuestion(rl) {
    rl.question('請輸入一個正整數:', (strInput) => {
        let resultOfQuestion = sumResult(strInput);
        if (!resultOfQuestion.status) {
            console.log(resultOfQuestion.errorMessage);
            askQuestion(rl);
            return;
        } else {
            // 關閉輸入介面
            console.log(resultOfQuestion.result);
            rl.close();
        }
    });
})(rl);
