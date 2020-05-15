//### 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。
const main = require("./Q2-module");
const rl = require("./readline");

(function askRemainderQuestion(rl) {
    rl.question('請輸入第一組整數:', strInput1 => {
        // const firstConfirmFormat = confirmFormat(strInput1);
        const calculation = main.setInput(strInput1);
        // 判斷格式是否正確（小數 字串 NaN 空字串）不正確再重新詢問
        // if (!!firstConfirmFormat) {
        //     console.log(firstConfirmFormat);
        //     askRemainderQuestion(rl);
        // }
        if (!calculation.status) {
            console.log(calculation.errorMessage);
            askRemainderQuestion(rl);
            return;
        }
        askQuestion2(strInput1);
    });
})(rl);

function askQuestion2(strInput1) {
    rl.question('請輸入第二組整數:', strInput2 => {
        // 判斷格式是否正確（小數 字串 NaN 空字串）不正確再重新詢問
        const calculation = main.setInput(strInput2);
        // const calculation = main(strInput1, strInput2);
        if (!calculation.status) {
            console.log(calculation.errorMessage);
            askQuestion2(strInput1);
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
        console.log(main.resultOfDiv3());
        rl.close();
    });
}


