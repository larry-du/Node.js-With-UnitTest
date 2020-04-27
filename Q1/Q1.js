// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('請輸入觀看人數', (strInput) => {
    const input = confirmInput(strInput)

    if (input) {
        const numInput = Number(strInput)
        const message = playingMovie(numInput);
        console.log(message)
    } else {
        // 如果格式錯誤
        console.log("請重新輸入")
    }
    rl.close();
});

// 判斷輸入人數的格式（字串、負數、小數、NaN)
function confirmInput(strInput) {
    let isEmptyString = !strInput.length;
    let isNegative = strInput < 0;
    let isFloat = parseInt(strInput) < strInput;
    let isString = Number.isNaN(Number(strInput));
    return !(isNegative || isFloat || isString || isEmptyString);
}

//  如果格式正確

function playingMovie(numInput) {
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

