const main = require("./Q14-module")
describe('正常情況', () => {
    test('m分鐘後有幾b隻細菌', () => {
        const strInput = "100";
        const result = main(strInput)
        expect(result).toBe(32)
    });

});

describe('非正常情況', () => {
    test("空字串!! 請重新輸入", () => {
        const strInput = " ";
        expect(() => { main(strInput) }).toThrow("空字串!!請重新輸入");
    });
    test("字串!!請重新輸入", () => {
        expect(() => {
            const strInput = "stringTest";
            const result = main(strInput);
            result
        }).toThrow("字串!!請重新輸入");
    });
    test("有e會爆!!請重新輸入", () => {
        expect(() => {
            const strInput = "12e32";
            const result = main(strInput);
            result
        }).toThrow("有e會爆!!請重新輸入");
    });
    test("沒負的時間!!請重新輸入", () => {
        expect(() => {
            const strInput = "-12";
            const result = main(strInput);
            result
        }).toThrow("沒負的時間!!請重新輸入");
    });

});