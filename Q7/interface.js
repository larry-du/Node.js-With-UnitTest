const main = require('./Q7-module');
const rl = require('./readline');

let resultOfStar = main(8).completeNormalStar;
let resultOfTurnStar = main(8).completeTurnStar;
console.log(resultOfStar);
console.log(resultOfTurnStar);
rl.close();
