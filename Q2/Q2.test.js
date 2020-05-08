const main = require("./Q2");

test('emptyStringToBeFalse 空字串!! 請重新輸入', () => {
    const strInput1 = " ";
    execute = main.setInput(strInput1);
    expect(execute).toEqual({
        status: false,
        errorMessage: " !!請勿輸入空字串!! 請重新輸入",
        result: null
    });
    const strInput2 = " ";
    execute2 = main.setInput(strInput2);
    expect(execute2).toEqual({
        status: false,
        errorMessage: " !!請勿輸入空字串!! 請重新輸入",
        result: null
    });
});

test('floatToBeFalse 小數!! 請重新輸入', () => {
    const strInput1 = "12.12";
    const execute = main.setInput(strInput1);
    expect(execute).toEqual({
        status: false,
        errorMessage: "12.12!!請勿輸入小數!! 請重新輸入",
        result: null
    });
    const strInput2 = "12.34";
    const execute2 = main.setInput(strInput2);
    expect(execute2).toEqual({
        status: false,
        errorMessage: "12.34!!請勿輸入小數!! 請重新輸入",
        result: null
    });
});

test('StringToBeFalse 字串!! 請重新輸入', () => {
    const strInput1 = "stringTest";
    const execute = main.setInput(strInput1);
    expect(execute).toEqual({
        status: false,
        errorMessage: "stringTest!!請勿輸入字串!! 請重新輸入",
        result: null
    });
    const strInput2 = "stringTest";
    const execute2 = main.setInput(strInput2);
    expect(execute2).toEqual({
        status: false,
        errorMessage: "stringTest!!請勿輸入字串!! 請重新輸入",
        result: null
    });
});

test('sameReminder 於數相同', () => {
    const strInput1 = "12";
    const strInput2 = "12";
    main.setInput(strInput1);
    main.setInput(strInput2);
    const execute = main.resultOfDiv3();
    expect(execute).toMatch("餘數相同");
});

test('notSameReminder 於數不相同', () => {
    const strInput1 = "12";
    const strInput2 = "13";
    main.setInput(strInput1);
    main.setInput(strInput2);
    const execute = main.resultOfDiv3();
    expect(execute).toMatch("餘數不相同");
});

