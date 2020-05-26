const main = require("./Q16-module")

describe('正常情況', () => {
    test('加密結果小寫', () => {
        const strInput = "abcde";
        const resultOfLowerCase = main(strInput)
        expect(resultOfLowerCase).toBe("defgh")
    });
    test('加密結果大寫', () => {
        const strInput = "ABCDE";
        const resultOfUpperCase = main(strInput)
        expect(resultOfUpperCase).toBe("DEFGH")
    });
    test('加密結果大小寫混合', () => {
        const strInput = "AbCdE";
        const resultOfUpperAndLowerCase = main(strInput)
        expect(resultOfUpperAndLowerCase).toBe("DeFgH")
    });
});

describe('非正常情況', () => {
    test("空字串!! 請重新輸入", () => {
        const strInput = " ";
        expect(() => { main(strInput) }).toThrow("空字串!!請重新輸入");
    });
    test("小於5個字母!! 請重新輸入", () => {
        const strInput = "asc";
        expect(() => { main(strInput) }).toThrow("要5個字母!!請重新輸入");
    });
    test("大於5個字母!! 請重新輸入", () => {
        const strInput = "ascnfekfn";
        expect(() => { main(strInput) }).toThrow("要5個字母!!請重新輸入");
    });
    test("輸入數字!! 請重新輸入", () => {
        const strInput = "12345";
        expect(() => { main(strInput) }).toThrow("數字!!請重新輸入字母");
    });
    test("輸入負數!! 請重新輸入", () => {
        const strInput = "-1234";
        expect(() => { main(strInput) }).toThrow("數字!!請重新輸入字母");
    });
    test("輸入小數!! 請重新輸入", () => {
        const strInput = "12.34";
        expect(() => { main(strInput) }).toThrow("數字!!請重新輸入字母");
    });
});