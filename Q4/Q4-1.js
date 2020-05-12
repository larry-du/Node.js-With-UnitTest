function sumResult(strInput) {
    //判斷格式
    let confirmStatus = confirmFormat(strInput)
    if (confirmStatus) {
        return {
            status: false,
            result: null,
            errorMessage: confirmStatus
        }
    }
    // 正偶數＋負奇數 ＝總和＋1
    equation(strInput)
    return {
        status: true,
        result: equation(strInput),
        errorMessage: null
    }
}

function equation(strInput) {
    let equationArr = [1];
    let numInput = Number(strInput)
    let stopValue = Math.floor(strInput / 2)
    for (let i = 0; i < stopValue; i++) {

        let plusEven = `+${evenSum(numInput).result[i]}`
        let minusOdd = `-${oddSum(numInput).result[i]}`

        equationArr.push(plusEven);
        if (oddSum(numInput).result[i] === undefined) {
            break;
        }
        equationArr.push(minusOdd);
    }
    // 印出算式和總和
    let calculationResult = 1 + evenSum(numInput).sum + oddSum(numInput).sum
    let resultOfEquation = `${equationArr.join('')} = ${calculationResult}`

    return resultOfEquation
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

function evenSum(n) {
    //正偶數相加
    let sum = 0;
    let result = [];
    for (let i = 2; i < n + 1; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        result.push(i);
    }
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return {
        sum,
        result
    };
}

function oddSum(n) {
    //負奇數相加
    let sum = 0;
    let result = [];
    for (let i = 3; i < n + 1; i++) {
        if (i % 2 === 0) {
            continue;
        }
        result.push(i);
    }
    for (let i = 0; i < result.length; i++) {
        sum += result[i] * -1;
    }
    return {
        sum,
        result
    };
}



module.exports = sumResult;
