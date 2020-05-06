const { main } = require("./Q2");

test('emptyStringToBeFalse 空字串!! 請重新輸入', () => {
    const arrInput = [" ", " "];
    const execute = main(arrInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: " !!請勿輸入空字串!! 請重新輸入"
    });
});

test('emptyStringToBeFalse 小數!! 請重新輸入', () => {
    const arrInput = ["12.3434", "12.423"];
    const execute = main(arrInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: "12.423!!請勿輸入小數!! 請重新輸入"
    });
});

test('emptyStringToBeFalse 字串!! 請重新輸入', () => {
    const arrInput = ["stringTest", "stringTest"];
    const execute = main(arrInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: "stringTest!!請勿輸入字串!! 請重新輸入"
    });
});

test('SameRemainder 對3取餘數 餘數相同', () => {
    const arrInput = ["12", "12"];
    const execute = main(arrInput);
    expect(execute).toEqual({
        status: true,
        result: "餘數相同"
    });
});

test('SameRemainder 對3取餘數 餘數不相同', () => {
    const arrInput = ["12", "13"];
    const execute = main(arrInput);
    expect(execute).toEqual({
        status: true,
        result: "餘數不相同"
    });
});