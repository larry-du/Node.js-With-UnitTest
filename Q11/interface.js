//### 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。
const rl = require("./readline");
const main = require("./Q11-module");

(function price(rl) {
    rl.question('請輸入會員期數:', strInput => {
        try {
            let showPrice = main(strInput);
            console.log(`需繳納的金額是:${showPrice}元`);
            rl.close();
        }
        catch (error) {
            console.log(error.message);
            price(rl);
        }
    });
})(rl);
