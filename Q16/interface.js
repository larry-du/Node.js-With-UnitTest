//### 16. 運用Caesar cipher: 明文中的所有字母加密，自訂一個平移參數。讓使用者輸入 5 個字母，字每向後平移 3 個數，印出加密結果
const rl = require("./readline");
const main = require("./Q16-module");

(function caesarCipherInterface(rl) {
    rl.question('請輸入5個字母:', strInput => {
        try {
            let resultOfCaesarCipher = main(strInput);
            console.log(`加密結果:${resultOfCaesarCipher}`);
            rl.close();
        } catch (error) {
            console.log(error.message);
            caesarCipherInterface(rl);
        }
    });
})(rl);