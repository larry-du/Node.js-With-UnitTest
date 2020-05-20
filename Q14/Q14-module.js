function main(strInput) {
    confirmFormat(strInput);
    let m = Number(strInput);
    let bacterial = 1;
    return twofold(bacterial, m)
}

function twofold(bacterial, m) {
    let multiple = Math.floor(m / 20);
    if (multiple === 0) {
        return bacterial;
    }
    return twofold(bacterial * 2, m - 20)
}

function confirmFormat(strInput) {
    if (!strInput.trim().length) {
        throw new Error("空字串!!請重新輸入");
    }
    if (Number.isNaN(Number(strInput))) {
        throw new Error("字串!!請重新輸入");
    }
    if (strInput.search("e") > 0) {
        throw new Error("有e會爆!!請重新輸入")
    }
    let numInput = Number(strInput);
    if (numInput < 0) {
        throw new Error("沒負的時間!!請重新輸入");
    }
}

module.exports = main;

