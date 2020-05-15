function main(strInput) {
    confirmFormat(strInput);
    return ageDiscount(strInput);
}

function ageDiscount(age) {
    const ticketsPrice = 400
    return age <= 6 || age >= 65 ? ticketsPrice / 2 : ticketsPrice
}

function confirmFormat(strInput) {
    if (!strInput.trim().length) {
        throw new Error("空字串!! 請重新輸入");
    }
    const numInput = Number(strInput)
    if (numInput < 0) {
        throw new Error("負數!! 請重新輸入");
    }
    if (parseInt(numInput) < numInput) {
        throw new Error("小數!! 請重新輸入");
    }
    if (Number.isNaN(Number(numInput))) {
        throw new Error("字串!! 請重新輸入");
    }
}

module.exports = main