//### 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。
function main(strInput) {
    confirmFormat(strInput)
    return money(strInput)
}

function money(strInput) {
    let period = Number(strInput)
    let membershipFees = 0;
    let counter = 0;
    let extraDiscount = Math.floor(period / 5)
    const firstDiscount = 500 * 0.79;
    if (period === 1) {
        return firstDiscount
    }
    do {
        membershipFees = membershipFees + 500;
        counter++;
    } while (counter < period - 1);
    return membershipFees + firstDiscount - (200 * extraDiscount);
}

function confirmFormat(strInput) {
    if (!strInput.trim().length) {
        throw new Error("空字串!!請重新輸入");
    }
    if (Number.isNaN(Number(strInput))) {
        throw new Error("字串!!請重新輸入");
    }

    const numInput = Number(strInput)
    if (numInput < 0) {
        throw new Error("負數!!請重新輸入");
    }
    if (Math.floor(numInput) < numInput) {
        throw new Error("小數!!請重新輸入");
    }
}

module.exports = main