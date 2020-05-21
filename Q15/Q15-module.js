//### 15. 有一輛搬運車，限重1噸，啞鈴每箱重30kg，單槓每箱重20kg，跑步機一台重50kg，在不將空間列入考慮的情況下，設一陣列 sport[3] 用來儲存三種器材的數量，以一亂數決定每次要搬到車上的器材為何，當超過限重時即停止搬運，並列印出三種器材的個數及總重量。
function main() {
    let sum = 0;
    return totalWeight(sum);
};

const sport = [
    { name: "啞鈴", weight: 30 },
    { name: "單槓", weight: 20 },
    { name: "跑步機", weight: 50 }
];

let quantityArray = []
function totalWeight(sum) {
    let random = randomProduce();
    let sportRandom = sport[random];
    quantityArray.push(random);
    sum += sportRandom.weight;
    if (sum >= 1000) {
        return sum
    }
    return totalWeight(sum)
};

function randomProduce() {
    let random = Math.floor(Math.random() * 3);
    return random
};




console.log(main());
// console.log(arr);
console.log(quantityArray.filter(function (value) {
    return value === 0
}).length);
console.log(quantityArray.filter(function (value) {
    return value === 1
}).length);
console.log(quantityArray.filter(function (value) {
    return value === 2
}).length);
// function counter(random) {
//     let dumbbells = [];
//     let horizontalBar = [];
//     let Treadmill = [];
//     if (random === 0) {
//         dumbbells.push(random);
//     }
//     if (random === 1) {
//         horizontalBar.push(random);
//     }
//     if (random === 2) {
//         Treadmill.push(random);
//     }
//     console.log(dumbbells)
//     console.log(horizontalBar)
//     console.log(Treadmill)
// }
// console.log(counter())

