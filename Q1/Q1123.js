// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

main();

function main() {
    rl.question('請輸入觀看人數', (strInput) => {
        // 判斷輸入人數的格式（字串、負數、小數、NaN)
        // let formatStatus = isInputFormatRight(Number(input));
        // if (!formatStatus) {
        //     // 如果格式錯誤 (formatStatus === false)
        //     console.log("格式錯誤");
        //     //     請重新輸入
        //     main();
        //     return;
        // }

        try {
            confirmInput(strInput);
            // 如果格式正確 (formatStatus === true)
            const playingResult = playingMovie(Number(strInput));
            // playingMovie(input);
            // 檢查人數, 顯示播放/不播放
            console.log(playingResult);
            rl.close();
        } catch (error) {
            //     請重新輸入
            console.log(error.message);
            main();
        }
    });
}

function confirmInput(strInput) {
    if (!strInput.length) {
        throw new Error("空字串!!請重新輸入");
    }
    const numInput = Number(strInput);
    const isNegative = numInput < 0;
    if (isNegative) {
        throw new Error("負數!!請重新輸入");
    }
    const isFloat = parseInt(numInput) < numInput;
    if (isFloat) {
        throw new Error("小數!!請重新輸入");
    }
    const isString = Number.isNaN(numInput);
    if (isString) {
        throw new Error("字串、NaN!!請重新輸入");
    }
}

// function isInputFormatRight(numInput) {
//     let isNegative = numInput < 0;
//     let isFloat = parseInt(numInput) < numInput;
//     let isString = Number.isNaN(numInput);
//     return !(isNegative || isFloat || isString);
// }

function playingMovie(input) {
    if (!input) {
        // 如果人數為0
        //     顯示不播放
        return "不播放電影";
    } else {
        // 檢查人數不為0
        //     顯示播放
        return "播放電影";
    }
}
