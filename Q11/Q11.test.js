const main = require("./Q11-module")

describe('非正常情況ˋ', () => {
    test("空字串!! 請重新輸入", () => {
        expect(() => {
            let period = " "
            let showPrice = main(period)
            showPrice
        }).toThrow("空字串!!請重新輸入");
    });
    test("字串!! 請重新輸入", () => {
        expect(() => {
            let period = "stringTest"
            let showPrice = main(period)
            showPrice
        }).toThrow("字串!!請重新輸入");
    });

    test("小數!! 請重新輸入", () => {
        expect(() => {
            let period = "12.323"
            let showPrice = main(period)
            showPrice
        }).toThrow("小數!!請重新輸入");
    });
    test("負數!! 請重新輸入", () => {
        expect(() => {
            let period = "-12"
            let showPrice = main(period)
            showPrice
        }).toThrow("負數!!請重新輸入");
    });
});

describe('正常情況', () => {
    test('會員折扣價格', () => {
        let period = "10"
        let showPrice = main(period)
        expect(showPrice).toBe(4495)
    });
    test('只輸入一期會員折扣價格', () => {
        let period = "1"
        let showPrice = main(period)
        expect(showPrice).toBe(395)
    });
});