//### 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，試寫一遞迴函數`function twofold(b, m)` 。讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。(細菌線性成長)
const main = require("./Q14-module")
const rl = require("./readline");

(function calculationBacterial(rl) {
    rl.question('請輸入分鐘數:', strInput => {
        try {
            numberOfBacterial = main(strInput);
            console.log(`${strInput}分鐘後,有${numberOfBacterial}b隻細菌出現喔,胎哥！！`);
            rl.close();
        } catch (error) {
            console.log(error.message);
            calculationBacterial(rl);
        }
    });
})(rl);