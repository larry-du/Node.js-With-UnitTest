function sumResult(strInput) {
    //判斷格式
    let confirmStatus = confirmFormat(strInput)
    if (confirmStatus.length) {
        return {
            status: false,
            result: null,
            errorMessage: confirmStatus
        }
    }
    // 正偶數＋負奇數 ＝總和
    equationResult(strInput)
    return {
        status: true,
        result: equationResult(strInput),
        errorMessage: null
    }
}

function confirmFormat(strInput) {
    const isEmptyString = !strInput.trim().length;
    if (isEmptyString) {
        return "空字串!! 請重新輸入";
    }
    const isString = Number.isNaN(Number(strInput));
    if (isString) {
        return "字串!! 請重新輸入";
    }

    const numInput = Number(strInput);
    const isNegative = numInput < 0;
    if (isNegative) {
        return "負數!! 請重新輸入";
    }
    const isFloat = Math.floor(numInput) < numInput;
    if (isFloat) {
        return "小數!! 請重新輸入";
    }
    return "";
}

function oddEven(strInput) {
    let valueArr = [];
    for (let i = 2; i <= strInput; i++) {
        if (i % 2 === 0) {
            valueArr.push(i);
        } else {
            valueArr.push(i * -1);
        }
    }
    return valueArr
}

function add(strInput) {
    let OddEvenArr = oddEven(strInput)
    let sum = 1;
    for (i = 0; i < OddEvenArr.length; i++) {
        sum += OddEvenArr[i];
    }
    return sum;
}

function equationResult(strInput) {
    let addResult = add(strInput)
    let OddEvenArr = oddEven(strInput)
    let equationArr = [1];
    for (i = 0; i < OddEvenArr.length; i++) {
        if (i % 2 === 0) {
            equationArr.push(`+${OddEvenArr[i]}`)
        } else {
            equationArr.push(`${OddEvenArr[i]}`)
        }
    }
    return `${equationArr.join("")}=${addResult}`
}

module.exports = sumResult