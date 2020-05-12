const sumResult = require("./Q4")

test('emptyStringToBeFalse 空字串!! 請重新輸入', () => {
    const strInput = " ";
    execute = sumResult(strInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: "空字串!! 請重新輸入",
        result: null
    });
});

test('negativeToBeFalse 小數!! 請重新輸入', () => {
    const strInput = "-2";
    const execute = sumResult(strInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: "負數!! 請重新輸入",
        result: null
    });
});

test('floatToBeFalse 小數!! 請重新輸入', () => {
    const strInput = "12.12";
    const execute = sumResult(strInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: "小數!! 請重新輸入",
        result: null
    });
});

test('StringToBeFalse 字串!! 請重新輸入', () => {
    const strInput = "stringTest";
    const execute = sumResult(strInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: "字串!! 請重新輸入",
        result: null
    });
});

test('列出算式與總和', () => {
    const strInput = "12";
    const execute = sumResult(strInput);
    expect(execute).toEqual({
        status: true,
        errorMessage: null,
        result: "1+2-3+4-5+6-7+8-9+10-11+12 = 8"
    });
});