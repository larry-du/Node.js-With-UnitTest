//### 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。
function main(strInput) {
    confirmFormat(strInput)
    return money(strInput)
}

function money(strInput) {
    let period = Number(strInput);
    let totalMoney = 0;
    let membershipFee = 500;
    let counter = 0;
    let firstFold = 0.79;
    let secondFold = 200;
    let extraDiscount = Math.floor(period / 5);
    const firstDiscount = membershipFee * firstFold;
    if (period === 1) {
        return firstDiscount;
    }
    do {
        totalMoney = totalMoney + membershipFee;
        counter++;
    } while (counter < period - 1);
    return totalMoney + firstDiscount - (secondFold * extraDiscount);
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