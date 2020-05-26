function main() {
    let totalArray = votes();
    return sum(totalArray);
}

function votes() {
    const theFirst = 4;
    const theSecond = 3;
    const theThird = 2;
    const theFourth = 1;
    let scoreArray = [
        [theFirst, theFourth, theFourth, theFourth],
        [theThird, theSecond, theFirst, theThird],
        [theSecond, theFirst, theSecond, theSecond],
        [theFourth, theThird, theThird, theFirst]
    ];
    let numberOfVotes = [51, 5, 23, 21];

    let totalVotes = [];
    for (let multiplicand = 0; multiplicand < numberOfVotes.length; multiplicand++) {
        let eachVotes = [];
        for (let multiplier = 0; multiplier < numberOfVotes.length; multiplier++) {
            eachVotes.push(scoreArray[multiplicand][multiplier] * numberOfVotes[multiplier]);
        }
        totalVotes.push(eachVotes);
    };
    return totalVotes;
};

function sum(totalArray) {
    let result = [];
    for (let i = 0; i < totalArray.length; i++) {
        result.push(totalArray[i].reduce(sumTotal, 0));
    };
    return result;
};

function sumTotal(accumulator, value) {
    return accumulator + value;
};

module.exports = main;
