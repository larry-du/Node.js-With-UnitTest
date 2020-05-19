const main = require("./Q10-module")

describe('Q10測試', () => {
    test('找出質數和對應index', () => {
        const array = [3, 50, 0, 13, 2, 4, 11];
        let result = main(array)
        expect(result).toMatch("數字為:3,index為0")
    });
});