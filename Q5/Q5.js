//### 5. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`
function umleven(strInput) {
    confirmFormat(strInput)
    let total = sumOfResult(strInput)
    let printEquation = equation(strInput)
    return `${printEquation} = ${total}`
}

function confirmFormat(strInput) {
    if (!strInput.trim().length) {
        throw new Error("空字串!! 請重新輸入");
    }
    if (Number.isNaN(Number(strInput))) {
        throw new Error("字串!! 請重新輸入");
    }

    const numInput = Number(strInput)
    if (numInput < 0) {
        throw new Error("負數!! 請重新輸入");
    }
    if (Math.floor(numInput) < numInput) {
        throw new Error("小數!! 請重新輸入");
    }
    if (numInput <= 2) {
        throw new Error("需輸入 4 以上偶數");
    }
    if (numInput % 2 !== 0) {
        throw new Error("奇數!! 需輸入 4 以上偶數");
    }
}

function sumOfResult(strInput) {
    let numInput = Number(strInput)
    if (numInput === 4) {
        return (numInput - 2) * numInput
    } else {
        return (numInput - 2) * numInput + sumOfResult(numInput - 2)
    }
}

function equation(strInput) {
    let numInput = Number(strInput)
    if (numInput === 4) {
        return `${(numInput - 2)} * ${numInput}`
    } else {
        return `${equation(numInput - 2)} + ${(numInput - 2)} * ${numInput}`
    }

}
module.exports = umleven
// console.log(umleven(8))
