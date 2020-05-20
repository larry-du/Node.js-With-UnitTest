function main() {
    let isPrimeArray = findPrime();
    let result = multiple(isPrimeArray);
    return printResult(result, isPrimeArray)
}

function checkPrime(num) {
    for (let counter = 2; counter < num; counter++) {
        if (num % counter === 0) {
            return false;
        }
        return !!(num > 1);
    }
}

function findPrime() {
    let prime = [];
    for (let number = 10; number < 21; number++) {
        if (checkPrime(number)) {
            prime.push(number)
        }
    }
    return prime;
}

function multiple(isPrimeArray) {
    let multipleNumber = [];
    for (let multiplicand = 0; multiplicand < isPrimeArray.length; multiplicand++) {
        let isPrimeMultiple = [];
        for (let multiplier = 1; multiplier < 10; multiplier++) {
            if (isPrimeArray[multiplicand] * multiplier < 100) {
                isPrimeMultiple.push(isPrimeArray[multiplicand] * multiplier);
            }
        }
        multipleNumber.push(isPrimeMultiple);
    }
    return multipleNumber
}

function printResult(result, isPrimeArray) {
    let final = []
    for (let setType = 0; setType < isPrimeArray.length; setType++) {
        final.push(`質數:${isPrimeArray[setType]}->1~100倍數為:${result[setType]}`)
    }
    return `${final.join("\n")}`
}

module.exports = main;

