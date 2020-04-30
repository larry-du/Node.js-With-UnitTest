function confirmFormat(strInput) {
    const isEmptyString = !strInput.length;
    if (isEmptyString) {
        console.log("空字串!! 請重新輸入")
    }
    const numInput = Number(strInput);
    const isNegative = numInput < 0;
    if (isNegative) {
        console.log("負數!! 請重新輸入");
    }
    const isFloat = parseInt(numInput) < numInput;
    if (isFloat) {
        console.log("小數!! 請重新輸入");
    }
    const isString = Number.isNaN(numInput);
    if (isString) {
        console.log("字串!! 請重新輸入");
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

module.exports = { confirmFormat, isPlayingMovie };

