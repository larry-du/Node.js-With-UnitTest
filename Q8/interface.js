//### 8. 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 `function  divi(n)` 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。
const main = require("./Q8-module")
const rl = require("./readline");

(function calculationDivision(rl) {
    rl.question('請輸入一正整數:', strInput => {
        try {
            divisionResult = main(strInput);
            console.log(`輸入${strInput},第${divisionResult}次連續除以3後,小數第二位是0喔！！`);
            rl.close();
        } catch (error) {
            console.log(error.message);
            calculationDivision(rl);
        }
    });
})(rl);