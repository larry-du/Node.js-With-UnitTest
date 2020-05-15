//### 5. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`
function umleven(strInput) {
    confirmFormat(strInput)
    // 算式與總和function結合
    // let total = sumOfResult(strInput).num
    // let printEquation = sumOfResult(strInput).string
    // 算式與總和function分開
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
// 算式與總和function結合,需注意兩組return需return一樣的東西
// function sumOfResult(strInput) {
//     let numInput = Number(strInput)
//     if (numInput === 4) {
//         return {
//             num: (numInput - 2) * numInput,
//             string: `${(numInput - 2)} * ${numInput}`
//         }
//     } else {
//         return {
//             num: (numInput - 2) * numInput + sumOfResult(numInput - 2).num,
//             string: `${sumOfResult(numInput - 2).string} + ${`${(numInput - 2)} * ${numInput}`}`
//         }

//     }
// }


// 算式與總和function分開
function sumOfResult(strInput) {
    let numInput = Number(strInput)
    if (numInput === 4) {
        return (numInput - 2) * numInput
    } else {
        return sumOfResult(numInput - 2) + (numInput - 2) * numInput
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

