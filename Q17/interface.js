//### 17. 運用 Borda Count。算出下面的候選人分數。(第一順位得4分、第二順位得3分、第三順位得2分、第四順位得1分)
const rl = require("./readline");
const main = require("./Q17-module");

let resultOfVotes = main();
for (let result = 0; result < resultOfVotes.length; result++) {
    let order = `${result + 1}`;
    console.log(`第${order}候選人分數是:${resultOfVotes[result]}`);
};

rl.close();