const { main } = require("./Q1");

test('emptyStringToBeFalse', () => {
    const strInput = "";
    const question = main(strInput);
    const answer = {
        status: false,
        errorMessage: "空字串!! 請重新輸入"
    }
    expect(question).toEqual(answer);
});
test("negativeToBeFalse", () => {
    const strInput = "-2";
    const question = main(strInput);
    const answer = {
        status: false,
        errorMessage: "負數!! 請重新輸入"
    }
    expect(question).toEqual(answer);
});
test("floatToBeFalse", () => {
    const strInput = "12.32423";
    const question = main(strInput);
    const answer = {
        status: false,
        errorMessage: "小數!! 請重新輸入"
    }
    expect(question).toEqual(answer);
});
test("stringToBeFalse", () => {
    const strInput = "stringTest";
    const question = main(strInput);
    const answer = {
        status: false,
        errorMessage: "字串!! 請重新輸入"
    }
    expect(question).toEqual(answer);
});

test('playMovie', () => {
    const strInput = "12";
    const question = main(strInput);
    const answer = {
        status: true,
        playingMessage: "播放電影"
    }
    expect(question).toEqual(answer);
});
test('doNotPlayMovie', () => {
    const strInput = "0";
    const answer = main(strInput);
    const result = {
        status: true,
        playingMessage: "不播放電影"
    }
    expect(answer).toEqual(result);
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

