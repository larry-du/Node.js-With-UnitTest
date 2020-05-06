//### 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。
const { main, confirmFormat } = require("./Q2");
const rl = require("./readline");

; (function askRemainderQuestion(rl) {
    rl.question('請輸入第一組整數:', strInput1 => {
        const firstConfirmFormat = confirmFormat(strInput1);
        // 判斷格式是否正確（小數 字串 NaN 空字串）不正確再重新詢問
        if (!!firstConfirmFormat) {
            console.log(firstConfirmFormat);
            askRemainderQuestion(rl);
        }

        rl.question('請輸入第二組整數:', strInput2 => {
            // 判斷格式是否正確（小數 字串 NaN 空字串）不正確再重新詢問
            const formatArray = [strInput1, strInput2]
            const calculation = main(formatArray);
            if (!calculation.status) {
                console.log(calculation.errorMessage);
                askRemainderQuestion(rl);
                return;
            }
            //如果格式正確
            //輸入值分別/3
            //判斷餘數是否相同
            //如果相同
            //顯示餘數相同
            //如果不相同
            //顯示餘數不相同
            //程式結束
            console.log(calculation.result);
            rl.close();
        });
    });
})(rl);


