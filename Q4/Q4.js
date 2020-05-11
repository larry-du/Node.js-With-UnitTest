//### 4. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和
// 輸入n
// 正偶數相加
// 負奇數相加
// 正偶數＋負奇數 ＝總和＋1
// 印出算式和總和
sumResult(20);
function sumResult(number) {
    let final = evenSum(number) + oddSum(number) + 1
    console.log(final)
}

function evenSum(n) {
    let sum = 0;
    let result = [];
    for (let i = 2; i <= n; i++) {
        if (i % 2 !== 0) {
            //偶數
            continue;
        }
        result.push(i);
    }
    for (let i = 0; i <= result.length - 1; i++) {
        sum += result[i];
    }
    return sum;
}

function oddSum(n) {
    let sum = 0;
    let result = [];
    for (let i = 3; i <= n; i++) {
        if (i % 2 === 0) {
            //偶數
            continue;
        }
        result.push(i);
    }
    for (let i = 0; i <= result.length - 1; i++) {
        sum += result[i] * -1;
    }
    return sum;
}

