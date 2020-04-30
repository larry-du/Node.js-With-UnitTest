//### 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。
const rl = (function readline() {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
})();

; (function main(rl) {
    rl.question('請輸入第一組整數:', strInput1 => {
        rl.question('請輸入第二組整數:', strInput2 => {
            // const [strInput1, strInput2] = strInput.split(" ");
            // // 判斷格式是否正確（小數 字串 NaN 空字串）
            const formatArray = [strInput1, strInput2]
            const confirmStatus = confirmFormat(formatArray);
            //  如果格式正確
            if (confirmStatus) {
                //輸入值分別/3
                const remainderResult = remainder(Number(strInput1), Number(strInput2));
                //判斷餘數是否相同
                //如果相同
                //顯示餘數相同
                //程式結束
                console.log(remainderResult);
                rl.close();
            } else {
                //如果格式不正確
                //請重新輸入
                main(rl);
            }
        });
    });
})(rl);

function confirmFormat(formatArray) {
    for (let i = 0; i < formatArray.length; i++) {
        const isEmptyString = !formatArray[i].trim().length;
        if (isEmptyString) {
            console.log(`!!`, `請勿輸入空字串!! 請重新輸入`);
        }
        const isFloat = parseInt(formatArray[i]) < formatArray[i];
        if (isFloat) {
            console.log(formatArray[i], `!!`, "請勿輸入小數!! 請重新輸入");
        }
        const isString = Number.isNaN(Number(formatArray[i]));
        if (isString) {
            console.log(formatArray[i], `!!`, "請勿輸入字串!! 請重新輸入");
        }
        return !(isEmptyString || isFloat || isString);
    }
}

function remainder(numInput1, numInput2) {
    return numInput1 % 3 === numInput2 % 3 ? "於數相同" : "於數不相同";
}