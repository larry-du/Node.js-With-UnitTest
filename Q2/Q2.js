const main = {
    input: [],
    setInput,
    resultOfDiv3
}

function resultOfDiv3() {
    return this.input.length === 2 && this.input[0] % 3 === this.input[1] % 3 ? "餘數相同" : "餘數不相同";
}

function setInput(strInput) {
    const confirmResult = confirmInput(strInput)
    if (confirmResult) {
        return {
            status: false,
            errorMessage: confirmResult,
            result: null
        }
    }
    else {
        this.input.push(strInput);
        return {
            status: true,
            errorMessage: null,
            result: confirmResult
        }
    }
}

function confirmInput(strInput) {
    const isEmptyString = !strInput.trim().length;
    if (isEmptyString) {
        return `${strInput}!!請勿輸入空字串!! 請重新輸入`;
    }
    const isFloat = Math.floor(strInput) < strInput;
    if (isFloat) {
        return `${strInput}!!請勿輸入小數!! 請重新輸入`;
    }
    const isString = Number.isNaN(Number(strInput));
    if (isString) {
        return `${strInput}!!請勿輸入字串!! 請重新輸入`;
    }
    return "";
}

module.exports = main;

                    // function main(arrInput) {
                    //     //  如果格式正確
                    //     const confirmStatus = confirmFormat(arrInput[1]);
                    //     if (!!confirmStatus) {
                    //         //如果格式不正確
                    //         //請重新輸入
                    //         // main(rl);
                    //         return {
                    //             status: false,
                    //             errorMessage: confirmStatus,
                    //             result: null
                    //         }
                    //     }
                    //     //輸入值分別/3
                    //     const remainderResult = remainder(Number(arrInput[0]), Number(arrInput[1]));
                    //     //判斷餘數是否相同
                    //     //如果相同
                    //     //顯示餘數相同
                    //     //程式結束
                    //     return {
                    //         status: true,
                    //         errorMessage: null,
                    //         result: remainderResult
                    //     }
                    // }

                    // function confirmFormat(strInput) {

                    //     const isEmptyString = !strInput.trim().length;
                    //     if (isEmptyString) {
                    //         // console.log(`!!`, `請勿輸入空字串!! 請重新輸入`);
                    //         return `${strInput}!!請勿輸入空字串!! 請重新輸入`;
                    //     }
                    //     const isFloat = Math.floor(strInput) < strInput;
                    //     if (isFloat) {
                    //         // console.log(formatArray[i], `!!`, "請勿輸入小數!! 請重新輸入");
                    //         return `${strInput}!!請勿輸入小數!! 請重新輸入`;
                    //     }
                    //     const isString = Number.isNaN(Number(strInput));
                    //     if (isString) {
                    //         // console.log(formatArray[i], `!!`, "請勿輸入字串!! 請重新輸入");
                    //         return `${strInput}!!請勿輸入字串!! 請重新輸入`;
                    //     }
                    //     // return !(isEmptyString || isFloat || isString);
                    //     return "";

                    // }

                    // function remainder(numInput1, numInput2) {
                    //     return numInput1 % 3 === numInput2 % 3 ? "餘數相同" : "餘數不相同";
                    // }
