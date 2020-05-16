function main(strInput) {
    confirmFormat(strInput);
    let index = 1;
    let numInput = Number(strInput);
    return divi(index, numInput);
}

function divi(index, number) {
    let dividedByThree = number / 3;
    let roundDownThirdPlace = Math.floor(dividedByThree * 100);
    if (roundDownThirdPlace === 0) {
        return index;
    } else {
        return divi(index + 1, dividedByThree);
    }
}

function confirmFormat(strInput) {
    if (!strInput.trim().length) {
        throw new Error("空字串!!請重新輸入");
    }
    if (Number.isNaN(Number(strInput))) {
        throw new Error("字串!!請重新輸入");
    }
    let numInput = Number(strInput);
    if (Math.floor(numInput) < numInput) {
        throw new Error("小數!!請重新輸入");
    }
    if (numInput < 0) {
        throw new Error("負數!!請重新輸入");
    }
}

module.exports = main