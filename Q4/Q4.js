//### 4. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和

// 印出算式和總和
// 輸入n
sumResult(10);
// 正偶數＋負奇數 ＝總和＋1
function sumResult(number) {
    // console.log(evenSum(number).result)
    // console.log(oddSum(number).result)
    // let aaa = [];
    let arr = [];
    let evenSumLen = evenSum(number).result.length - 1
    for (let i = 0; i <= evenSumLen; i++) {
        let plusEven = `+${evenSum(number).result[i]}`
        let minusOdd = `-${oddSum(number).result[i]}`
        arr.push(plusEven);
        if (oddSum(number).result[i] === undefined) {
            break
        }
        arr.push(minusOdd);
    }
    let final = 1 + evenSum(number).sum + oddSum(number).sum
    // console.log(arr, final)
    console.log(`1${arr.join('')} = ${final}`)
}

// console.log(`1 + ${even[0]} - ${odd[0]}`)

function evenSum(n) {
    //正偶數相加
    let sum = 0;
    let result = [];
    for (let i = 2; i <= n; i++) {
        if (i % 2 !== 0) {
            continue;
        }
        result.push(i);
    }
    for (let i = 0; i <= result.length - 1; i++) {
        sum += result[i];
        // console.log(`${result[i]}-`);
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
    for (let i = 3; i <= n; i++) {
        if (i % 2 === 0) {
            continue;
        }
        result.push(i);
    }
    for (let i = 0; i <= result.length - 1; i++) {
        sum += result[i] * -1;
        // sum = sum + result[i] * -1
        // console.log(`${result[i]}+`)
    }
    return {
        sum,
        result
    };
}

