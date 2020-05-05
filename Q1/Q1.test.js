const { main } = require("./Q1");

test('emptyStringToBeFalse', () => {
    const strInput = "";
    expect(main(strInput)).toEqual({ status: false, errorMessage: "空字串!! 請重新輸入" });
});
test("negativeToBeFalse", () => {
    const strInput = "-2";
    expect(main(strInput)).toEqual({ status: false, errorMessage: "負數!! 請重新輸入" });
});
test("floatToBeFalse", () => {
    const strInput = "12.32423";
    expect(main(strInput)).toEqual({ status: false, errorMessage: "小數!! 請重新輸入" });
});
test("stringToBeFalse", () => {
    const strInput = "stringTest";
    expect(main(strInput)).toEqual({ status: false, errorMessage: "字串!! 請重新輸入" });
});

test('playMovie', () => {
    const strInput = "12";
    expect(main(strInput)).toEqual({ status: true, playingMessage: "播放電影" });
});
test('doNotPlayMovie', () => {
    const strInput = "0";
    expect(main(strInput)).toEqual({ status: true, playingMessage: "不播放電影" });
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

