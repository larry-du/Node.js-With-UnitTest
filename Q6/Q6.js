//### 6. 宣告陣列`name`，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。
const main = {
    name: [],
    confirmFormat,
    searchAlphabets
}

function confirmFormat(strInput) {
    const reg = /^[A-z]+$/g;
    if (!reg.test(strInput)) {
        throw new Error("請輸入英文字")
    }
    main.name.push(strInput)
}

function searchAlphabets() {
    const getData = main.name;
    const getFirstThirdName = [];
    let alphabetsArr = [];
    for (let i = 0; i < getData.length; i++) {
        if (!(i % 2)) {
            getFirstThirdName.push(getData[i]);
        }
    }
    let firstName = getFirstThirdName[0]
    for (let i = 0; i < firstName.length; i++) {
        if (!(i % 2)) {
            alphabetsArr.push(firstName.charAt(i));
        }
    }
    let thirdName = getFirstThirdName[1]
    for (let i = 0; i < thirdName.length; i++) {
        if (!(i % 2)) {
            alphabetsArr.push(thirdName.charAt(i));
        }
    }
    return alphabetsArr
}

module.exports = { main }