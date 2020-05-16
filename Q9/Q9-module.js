function getArrayResult(arr1, arr2) {
    let getSumArray = []
    for (let i = 0; i < 5; i++) {
        getSumArray.push(arr1[i] + arr2[i])
    }
    return getSumArray
}

module.exports = getArrayResult