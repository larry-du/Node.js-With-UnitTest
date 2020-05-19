function main(array) {
    let primeResult = findPrime(array)
    return printResult(primeResult)
}

function findPrime(array) {
    let arrValue = []
    let arrIndex = []
    for (let dividend = 0; dividend < array.length; dividend++) {
        if (isPrime(array[dividend])) {
            arrValue.push(array[dividend])
            arrIndex.push(dividend)
        }
    }
    return {
        primeValue: arrValue,
        primeIndex: arrIndex
    }
}

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return !!(num > 1);
}

function printResult(primeResult) {
    let final = []
    for (let typeSet = 0; typeSet < primeResult.primeIndex.length; typeSet++) {
        final.push(`數字為:${primeResult.primeValue[typeSet]},index為${primeResult.primeIndex[typeSet]}`);
    }
    return `${final.join('\n')}`
}
module.exports = main
    // for (let divisor = 2; divisor < array[dividend]; divisor++) {
    //     console.log(divisor, array[dividend], dividend)
    //     if (array[dividend] === 2) {
    //         arrValue.push(array[dividend])
    //         arrIndex.push(dividend)
    //         break
    //     }
    //     if (array[dividend] % divisor === 0) {
    //         break
    //     } else {
    //         arrValue.push(array[dividend])
    //         arrIndex.push(dividend)
    //         break
    //     }
    // }
