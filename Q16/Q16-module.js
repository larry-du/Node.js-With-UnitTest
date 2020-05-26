function main(strInput) {
    let offSet = 3;
    confirmFormat(strInput);
    return caesarCipher(strInput, offSet);
};

function caesarCipher(strInput, offSet) {
    let encryptionLetter = "";
    for (let checkLetter = 0; checkLetter < strInput.length; checkLetter++) {
        let ascII = strInput.charCodeAt(checkLetter);
        if (ascII >= 65 && ascII <= 90) {
            encryptionLetter += String.fromCharCode((ascII - 65 + offSet) % 26 + 65);
        };
        if (ascII >= 97 && ascII <= 122) {
            encryptionLetter += String.fromCharCode((ascII - 97 + offSet) % 26 + 97);
        };
    };
    return encryptionLetter;
};

function confirmFormat(strInput) {
    if (!strInput.trim().length) {
        throw new Error("空字串!!請重新輸入字母");
    };
    if (strInput.length !== 5) {
        throw new Error("要5個字母!!請重新輸入");
    };
    let numInput = Number(strInput);
    if (!Number.isNaN(numInput)) {
        throw new Error("數字!!請重新輸入字母");
    };
};
module.exports = main;