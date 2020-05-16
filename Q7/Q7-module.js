// ### 7. 印出下圖，並轉 90°
// ```
//   ** **  
//  ******* 
// *********
// *********
//  *******
//   *****
//    ***
//     *
// ```
function main(strInput) {
    let numInput = Number(strInput);
    let starNormal = printStar(numInput);
    let completeNormalStar = clearFormat(starNormal);
    let turnStar = starTurnRight(starNormal);
    let completeTurnStar = clearFormat(turnStar);

    return {
        completeNormalStar,
        completeTurnStar
    }
}

function printStar(height) {
    let rowArray = []
    for (let row = 0; row < height; row++) {
        let colArray = [];
        for (let col = 0; col < 9; col++) {
            if (row === 0 && (col < 2 || col === 4 || col > 6)) {
                colArray.push(" ");
            } else if (row === 1 && (col === 0 || col > 7)) {
                colArray.push(" ");
            } else if (row === 4 && (col === 0 || col > 7)) {
                colArray.push(" ");
            } else if (row === 5 && (col < 2 || col > 6)) {
                colArray.push(" ");
            } else if (row === 6 && (col < 3 || col > 5)) {
                colArray.push(" ");
            } else if (row === 7 && (col < 4 || col > 4)) {
                colArray.push(" ");
            } else {
                colArray.push("*");
            }
        }
        rowArray.push(colArray);
    }
    return rowArray;
}

function starTurnRight(starNormal) {
    let row = starNormal[0].length;
    let col = starNormal.length;
    let resultOfTurnStar = [];
    for (let i = 0; i < row; i++) {
        resultOfTurnStar[i] = [];
        for (let j = 0; j < col; j++) {
            resultOfTurnStar[i][j] = starNormal[j][i]
        }
    }
    return resultOfTurnStar;
}

function clearFormat(completeStar) {
    let clearSpace = completeStar.join('\n');
    let resultOfClearFormat = clearSpace.replace(/,/g, "");
    return resultOfClearFormat;
}

module.exports = main
