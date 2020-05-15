function num(x) {
    let arr1 = []
    for (let i = 0; i < 1; i++) {
        let arr2 = []
        for (let j = 0; j < x; j++) {
            if (j === 3) {
                arr2.push("@");
            }
            arr2.push(j);
        }
        arr1.push(arr2);
    }
    return arr1
}

console.log(num(6));


var originArr = num(6);
function turn(originArr) {
    // let arr = []
    // arr.push(originArr)
    let col = originArr[0].length
    console.log(col)
    let row = originArr.length
    console.log(row)
    let result = []
    for (let i = 0; i < col; i++) {
        result[i] = []
        for (let j = 0; j < row; j++) {
            result[i][j] = originArr[j][i]
        }
        // result.push(rowItem)
    }
    return result;
}

console.log(turn(originArr))

