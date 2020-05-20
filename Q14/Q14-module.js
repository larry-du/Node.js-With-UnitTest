function main(strInput) {
    confirmFormat(strInput);
    let m = Number(strInput);
    let bacterial = 1;
    let multiple = Math.floor(m / 20) * 2;
    return twofold(bacterial, multiple)
}

function twofold(bacterial, multiple) {
    if (multiple < 1) {
        return bacterial;
    }
    if (bacterial === Math.floor(multiple)) {
        return bacterial;
    }
    return twofold(bacterial + 1, multiple)
}

function confirmFormat(strInput) {
    if (!strInput.trim().length) {
        throw new Error("空字串!!請重新輸入");
    }
    if (Number.isNaN(Number(strInput))) {
        throw new Error("字串!!請重新輸入");
    }
    let numInput = Number(strInput);
    if (numInput < 0) {
        throw new Error("沒負的時間!!請重新輸入");
    }
}

module.exports = main;

