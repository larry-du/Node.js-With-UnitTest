// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

; (function main() {
    rl.question('請輸入觀看人數', (strInput) => {
        // 判斷輸入人數的格式（字串、負數、小數、NaN)
        const confirmStatus = confirmFormat(strInput);
        //  如果格式正確
        if (confirmStatus) {
            const playingResult = isPlayingMovie(Number(strInput));
            console.log(playingResult);
            // 關閉輸入介面
            rl.close();
            // 如果格式錯誤
        } else {
            //  重新輸入
            main();
        }
    });
})();

function confirmFormat(strInput) {
    const isEmptyString = !strInput.length;
    if (isEmptyString) {
        console.log("空字串!! 請重新輸入")
    }
    const numInput = Number(strInput);
    const isNegative = numInput < 0;
    if (isNegative) {
        console.log("負數!! 請重新輸入")
    }
    const isFloat = parseInt(numInput) < numInput;
    if (isFloat) {
        console.log("小數!! 請重新輸入")
    }
    const isString = Number.isNaN(numInput);
    if (isString) {
        console.log("字串!! 請重新輸入")
    }
    return !(isNegative || isFloat || isString || isEmptyString);
}

function isPlayingMovie(numInput) {
    if (!numInput) {
        // 如果人數為0
        //     顯示不播放
        return "不播放電影";
    } else {
        // 檢查人數不為0
        //     顯示播放
        return "播放電影";
    }
}

