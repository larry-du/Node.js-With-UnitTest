// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
const { confirmFormat, isPlayingMovie } = require("./Q1");
const rl = (function readline() {
    const readline = require('readline');
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
})();

; (function main(rl) {
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
            main(rl);
        }
    });
})(rl);