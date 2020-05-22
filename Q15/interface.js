//### 15. 有一輛搬運車，限重1噸，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。
const rl = require("./readline");
const main = require("./Q15-module");

// console.log(main().productList)
// console.log(main().resultOfWeight)
let totalWeight = main().resultOfWeight;
let dumbbells = main().productList.dumbbellsList;
let horizontalBar = main().productList.horizontalBarList;
let treadmill = main().productList.treadmillList;
console.log(`總重量為:${totalWeight},啞鈴個數:${dumbbells},單槓個數:${horizontalBar},跑步機個數:${treadmill}`);

rl.close();