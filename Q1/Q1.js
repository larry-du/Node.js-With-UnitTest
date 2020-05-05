function main(strInput) {
    // 判斷輸入人數的格式（字串、負數、小數、NaN)
    const confirmStatus = confirmFormat(strInput);
    if (!!confirmStatus) {
        // 如果格式錯誤
        return {
            status: false,
            errorMessage: confirmStatus
        };
    }
    //  如果格式正確
    const playingStatus = isPlayingMovie(Number(strInput));
    // console.log(playingResult);
    return {
        status: true,
        playingMessage: playingStatus
    }
}

// let obj = {
//     0: "空字串!! 請重新輸入",
//     1: "負數!! 請重新輸入"
// }

function confirmFormat(strInput) {
    const isEmptyString = !strInput.length;
    if (isEmptyString) {
        //return obj["0"]
        // console.log("空字串!! 請重新輸入")
        return "空字串!! 請重新輸入";
        // return 0
    }
    const numInput = Number(strInput);
    const isNegative = numInput < 0;
    if (isNegative) {
        // console.log("負數!! 請重新輸入");
        return "負數!! 請重新輸入";
        // return 1;
    }
    const isFloat = parseInt(numInput) < numInput;
    if (isFloat) {
        // console.log("小數!! 請重新輸入");
        // return 2;
        return "小數!! 請重新輸入";
    }
    const isString = Number.isNaN(numInput);
    if (isString) {
        // console.log("字串!! 請重新輸入");
        return "字串!! 請重新輸入";

    }
    return "";
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

module.exports = { main };

