//### 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「邏輯運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。
const main = require("./Q3")
const rl = require("./readline");
(function discount(rl) {
    rl.question('請輸入年齡:', strInput => {
        try {
            discountResult = main(strInput);
            console.log("票價：", discountResult);
            rl.close();
        } catch (error) {
            console.log(error.message);
            discount(rl);
        }
    });
})(rl);

//     // // 判斷格式是否正確（小數 字串 NaN 空字串）
//     const confirmStatus = confirmFormat(strInput);
//     //  如果格式正確
//     if (confirmStatus) {
    //         //輸入年齡判斷票價
    //         //判斷6歲(含)以下 , 65歲(含)以上有優惠價
    //         const discountResult = ageDiscount(Number(strInput));
    //         //判斷優惠結果
    //         //程式結束
    //         console.log("票價：", discountResult);
    //         rl.close();
    //     } else {
        //         //如果格式不正確
        //         //請重新輸入
        //         main(rl);
        //     }
        //     // });
        // });

        // const isEmptyString = !strInput.length;
        // if (isEmptyString) {
            //     console.log("空字串!! 請重新輸入");
            // }
            // const numInput = Number(strInput)
            // const isNegative = numInput < 0;
            // if (isNegative) {
                //     console.log("負數!! 請重新輸入");
                // }
                // const isFloat = parseInt(numInput) < numInput;
                // if (isFloat) {
                    //     console.log("小數點!! 請重新輸入");
                    // }
                    // const isString = Number.isNaN(Number(numInput));
                    // if (isString) {
                        //     console.log("字串!! 請重新輸入");
                        // }
                        // return !(isEmptyString || isNegative || isFloat || isString);

                        // if (age <= 6 || age >= 65) {
                        //     const ticketsDiscount = ticketsPrice / 2;
                        //     return ticketsDiscount;
                        // } else {
                        //     return ticketsPrice;
                        // }

