// ### 7. 印出下圖，並轉 90°
// ```
//
//
//   ** **  
//  ******* 
// *********
// *********
//  *******
//   *****
//    ***
//     *
// ```
function star(halfHeight) {
    // let halfHeight = 6
    // let result = "";
    let arrayAxisY = []
    for (let indexAxisY = 2; indexAxisY < halfHeight; indexAxisY++) {
        let arrayAxisX = []
        // indexAxisY = 2
        // indexAxisY = 3
        for (let indexAxisXSpace = 0; indexAxisXSpace < halfHeight - indexAxisY; indexAxisXSpace++) {
            // new Height = 6 - 3 = 3
            // result += " ";
            arrayAxisX.push(' ');
        }

        for (let indexAxisXStars = 0; indexAxisXStars < 2 * (indexAxisY + 1) - 1; indexAxisXStars++) {
            // 2 * 2 - 1 = 3
            // 2 * 3 - 1 = 5
            if (indexAxisY === 2 && indexAxisXStars === 2) {
                // result += " ";
                arrayAxisX.push(' ');
                continue;
            }
            // result += "*";
            arrayAxisX.push("*");
        }
        arrayAxisY.push(arrayAxisX);
        // result += "\n"
    }

    // for (let indexAxisY = 0; indexAxisY < halfHeight; indexAxisY++) {

    //     for (let indexAxisXSpace = 0; indexAxisXSpace < indexAxisY; indexAxisXSpace++) {
    //         // result += " ";
    //         arrayAxisX.push(' ');
    //     }

    //     for (let indexAxisXStars = 0; indexAxisXStars < 2 * (halfHeight - indexAxisY) - 1; indexAxisXStars++) {
    //         // result += "*";
    //         arrayAxisX.push('*');
    //     }
    //     arrayAxisY.push(arrayAxisX)
    //     // result += "\n"
    // }
    return arrayAxisY
    // return result
}
console.log(star(6))
// var originArr = star(5);
// function turn(originArr) {
//     // let arr = []
//     // arr.push(originArr)
//     let col = originArr[0].length
//     console.log(col)
//     let row = originArr.length
//     console.log(row)
//     let result = []
//     for (let i = 0; i < col; i++) {
//         result[i] = []
//         for (let j = 0; j < row; j++) {
//             result[i][j] = originArr[j][i]
//         }
//         // result.push(rowItem)
//     }
//     return result;
// }

// let xx = turn(originArr)

// var bb = [].concat.apply([], xx);
// console.log(bb);