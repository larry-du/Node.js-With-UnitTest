function main() {
    let sum = 0;
    let productArray = productInformation(sum).quantityArray;
    let productList = classification(productArray);
    let resultOfWeight = productInformation(sum).sumTotal;
    return {
        productList,
        resultOfWeight
    };
};

const sport = [
    { name: "啞鈴", weight: 30 },
    { name: "單槓", weight: 20 },
    { name: "跑步機", weight: 50 }
];

function productInformation(sum) {
    let quantityArray = [];
    function sumWeight(sum) {
        let random = randomProduce();
        let sportRandom = sport[random];
        quantityArray.push(random);
        sum += sportRandom.weight;
        if (sum > 1000) {
            return sum - sportRandom.weight;
        }
        return sumWeight(sum);
    };
    const totalWeight = sumWeight(sum);
    return { sumTotal: totalWeight, quantityArray };

}

function randomProduce() {
    let random = Math.floor(Math.random() * 3);
    return random;
};

function classification(productArray) {
    let numOfDumbbells = productArray.filter(function (dumbbells) {
        return dumbbells === 0;
    }).length;
    let numOfHorizontalBar = productArray.filter(function (horizontalBar) {
        return horizontalBar === 1
    }).length;
    let numOfTreadmill = productArray.filter(function (treadmill) {
        return treadmill === 2
    }).length;
    return {
        dumbbellsList: numOfDumbbells,
        horizontalBarList: numOfHorizontalBar,
        treadmillList: numOfTreadmill
    };
};
module.exports = main