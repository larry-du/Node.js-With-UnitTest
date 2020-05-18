const main = require("./Q8-module")

describe('非正常情況ˋ', () => {
    test("空字串!! 請重新輸入", () => {
        expect(() => {
            const strInput = " "
            const result = main(strInput)
            result;
        }).toThrow("空字串!!請重新輸入");
    });
    test("字串!! 請重新輸入", () => {
        expect(() => {
            const strInput = "strInput"
            const result = main(strInput)
            result;
        }).toThrow("字串!!請重新輸入");
    });

    test("小數!! 請重新輸入", () => {
        expect(() => {
            const strInput = "12.3223"
            const result = main(strInput)
            result;
        }).toThrow("小數!!請重新輸入");
    });
    test("負數!! 請重新輸入", () => {
        expect(() => {
            const strInput = "-12"
            const result = main(strInput)
            result;
        }).toThrow("負數!!請重新輸入");
    });
});

describe('正常情況ˋ', () => {
    test("輸入3,第1次連續除以3後,小數第二位是0喔！！", () => {
        const strInput = "3"
        const result = main(strInput)
        expect(result).toBe(1);
    });
    test("輸入4,第6次連續除以3後,小數第二位是0喔！！", () => {
        const strInput = "4"
        const result = main(strInput)
        expect(result).toBe(6);
    });
});

