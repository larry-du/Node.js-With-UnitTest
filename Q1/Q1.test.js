const { confirmFormat, isPlayingMovie } = require("./Q1");

test("emptyStringToBeFalse", () => {
    const isEmptyString = "";
    expect(confirmFormat(isEmptyString)).toBeFalsy();
});
test("negativeToBeFalse", () => {
    const isNegative = -12;
    expect(confirmFormat(isNegative)).toBeFalsy();
});
test("floatToBeFalse", () => {
    const isFloat = 12.2334;
    expect(confirmFormat(isFloat)).toBeFalsy();
});
test("stringToBeFalse", () => {
    const isString = "stringTest"
    expect(confirmFormat(isString)).toBeFalsy();
});


test("movieToBePlaying", () => {
    const people = 21;
    expect(isPlayingMovie(people)).toMatch("播放電影");
});
test("movieNotToBePlaying", () => {
    const people = 0;
    expect(isPlayingMovie(people)).toMatch("不播放電影");
});

