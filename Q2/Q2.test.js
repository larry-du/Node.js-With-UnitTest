const main = require("./Q2");

test('emptyStringToBeFalse 空字串!! 請重新輸入', () => {
    execute = main.setInput(" ")
    expect(execute).toEqual({
        status: false,
        errorMessage: " !!請勿輸入空字串!! 請重新輸入",
        result: null
    });
});

test('floatToBeFalse 小數!! 請重新輸入', () => {
    const execute = main.setInput("12.12");
    expect(execute).toEqual({
        status: false,
        errorMessage: "12.12!!請勿輸入小數!! 請重新輸入",
        result: null
    });
});

test('StringToBeFalse 字串!! 請重新輸入', () => {
    const execute = main.setInput("stringTest");
    expect(execute).toEqual({
        status: false,
        errorMessage: "stringTest!!請勿輸入字串!! 請重新輸入",
        result: null
    });
});

test('sameReminder 於數相同', () => {
    main.setInput("12");
    main.setInput("12");
    const execute = main.resultOfDiv3();
    expect(execute).toMatch("餘數相同");
});

test('notSameReminder 於數不相同', () => {
    main.setInput("12");
    main.setInput("13");
    const execute = main.resultOfDiv3();
    expect(execute).toMatch("餘數不相同");
});

