const main = require("./Q3-module")

test("空字串!! 請重新輸入", () => {
    expect(() => {
        main(" ");
    }).toThrow("空字串!! 請重新輸入");
});

test("負數!! 請重新輸入", () => {
    expect(() => {
        main("-12");
    }).toThrow("負數!! 請重新輸入");
});
test("小數!! 請重新輸入", () => {
    expect(() => {
        main("12.23");
    }).toThrow("小數!! 請重新輸入");
});
test("字串!! 請重新輸入", () => {
    expect(() => {
        main("stringTest");
    }).toThrow("字串!! 請重新輸入");
});

test("無折扣票價", () => {
    expect(main("12")).toBe(400);
});

test("折扣票價6歲(含)以下", () => {
    expect(main("6")).toBe(200);
});
test("折扣票價65歲(含)以上", () => {
    expect(main("65")).toBe(200);
});