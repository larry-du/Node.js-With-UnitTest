const main = require("./Q8-module")

describe('非正常情況ˋ', () => {
    test("空字串!! 請重新輸入", () => {
        expect(() => {
            main(" ");
        }).toThrow("空字串!!請重新輸入");
    });
    test("字串!! 請重新輸入", () => {
        expect(() => {
            main("stringTest");
        }).toThrow("字串!!請重新輸入");
    });

    test("小數!! 請重新輸入", () => {
        expect(() => {
            main("12.23");
        }).toThrow("小數!!請重新輸入");
    });
    test("負數!! 請重新輸入", () => {
        expect(() => {
            main("-12");
        }).toThrow("負數!!請重新輸入");
    });
});

describe('正常情況ˋ', () => {
    test("輸入4,第6次連續除以3後,小數第二位是0喔！！", () => {
        expect(main("4")).toBe(6);
    });
});

