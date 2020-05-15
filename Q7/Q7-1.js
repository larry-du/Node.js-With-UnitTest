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
function star(n) {
    let result = "";
    for (let i = 4; i < n; i++) {
        for (let j = 5; j < n; j++) {
            result += " ";
        }
        for (let j = 4; j < n; j++) {
            result += "*";
        }

    }


    for (let i = 3; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            result += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {

            result += "*";
        }
        result += "\n"
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            result += "*";
        }
        result += "\n"
    }

    return result
    // return arr
}
console.log(star(5))

// let arr = []
// for (let i = 0; i < 1; i++) {
//     for (let j = 0; j < 7; j++) {
//         if (j === 0 | j === 1 | j === 4) {
//             arr.push("");
//         } else {
//             arr.push("*");
//         }
//     }

// }
