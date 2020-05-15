// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。
const { main } = require("./Q1-module");
const rl = require("./readline");

(function askPlayingMovie(rl) {
    rl.question('請輸入觀看人數:', (strInput) => {
        let playingMovieInterface = main(strInput);
        if (!playingMovieInterface["status"]) {
            console.log(playingMovieInterface["errorMessage"]);
            askPlayingMovie(rl);
            return;
        } else {
            // 關閉輸入介面
            console.log(playingMovieInterface["playingMessage"]);
            rl.close();
        }
    });
})(rl);

