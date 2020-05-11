const { main } = require("./Q1");

test('emptyStringToBeFalse 空字串!! 請重新輸入', () => {
    const strInput = " ";

    const execute = main(strInput);
    expect(execute).toEqual({
        status: false,
        errorMessage: "空字串!! 請重新輸入",
        playingMessage: null
    });
});
test("negativeToBeFalse 負數!! 請重新輸入", () => {
    const strInput = "-2";
    const question = main(strInput);

    expect(question).toEqual({
        status: false,
        errorMessage: "負數!! 請重新輸入",
        playingMessage: null
    });
});
test("floatToBeFalse 小數!! 請重新輸入", () => {
    const strInput = "12.32423";
    const question = main(strInput);
    expect(question).toEqual({
        status: false,
        errorMessage: "小數!! 請重新輸入",
        playingMessage: null
    });
});
test("stringToBeFalse 字串!! 請重新輸入", () => {
    const strInput = "stringTest";
    const question = main(strInput);
    expect(question).toEqual({
        status: false,
        errorMessage: "字串!! 請重新輸入",
        playingMessage: null
    });
});

test('playMovie 播放電影', () => {
    const strInput = "12";
    const question = main(strInput);
    expect(question).toEqual({
        status: true,
        errorMessage: null,
        playingMessage: "播放電影"
    });
});
test('doNotPlayMovie 不播放電影', () => {
    const strInput = "0";
    const answer = main(strInput);
    expect(answer).toEqual({
        status: true,
        errorMessage: null,
        playingMessage: "不播放電影"
    });
});
// test("emptyStringToBeFalse", () => {
//     const isEmptyString = "";
//     expect(main(isEmptyString)).toBeFalsy();
// });
// test("negativeToBeFalse", () => {
//     const isNegative = -12;
//     expect(main(isNegative)).toBeFalsy();
// });
// test("floatToBeFalse", () => {
//     const isFloat = 12.2334;
//     expect(main(isFloat)).toBeFalsy();
// });
// test("stringToBeFalse", () => {
//     const isString = "stringTest"
//     expect(main(isString)).toBeFalsy();
// });
// test.only("ToBeTrue", () => {
//     const isString = 21
//     expect(main(isString)).toBeTruthy();
// });


// test("movieToBePlaying", () => {
//     const people = 21;
//     expect(main(people)).toBeTruthy();
// });
// test("movieNotToBePlaying", () => {
//     const people = 0;
//     expect(main(people)).toBeFalsy();
// });

