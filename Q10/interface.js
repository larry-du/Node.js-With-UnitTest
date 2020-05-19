//### 10. 宣告一整數陣列 `array = [3,50,0,13,2,4,11]` 試寫一程式，印出陣列中所包含的質數以及其索引值。
const rl = require("./readline")
const main = require("./Q10-module")

const array = [3, 50, 0, 13, 2, 4, 11];
let result = main(array);
console.log("輸入陣列為:", array)
console.log(result);

rl.close()