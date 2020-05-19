const main = require("./Q10-module")

describe('Q10測試', () => {
    test('找出質數和對應index', () => {
        const array = [3, 50, 0, 13, 2, 4, 11];
        let result = main(array)
        console.log(result)
        expect(result).toBe(
            "數字為:3,index為0\n數字為:13,index為3\n數字為:2,index為4\n數字為:11,index為6"

        )
    });
});