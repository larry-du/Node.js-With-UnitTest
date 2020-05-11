//### 4. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和
// 輸入n
const sumResult = require("./Q4")
const rl = require("./readline");

(function askQuestion(rl) {
    rl.question('請輸入一個正整數:', (strInput) => {
        let resultOfQuestion = sumResult(strInput);
        if (!resultOfQuestion.status) {
            console.log(resultOfQuestion.errorMessage);
            askQuestion(rl);
            return;
        }
        // 關閉輸入介面
        console.log(resultOfQuestion.result);
        rl.close();

    });
})(rl);
