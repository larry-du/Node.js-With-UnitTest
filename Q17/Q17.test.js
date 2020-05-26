const main = require("./Q17-module");

describe('正常情況', () => {
    test('候選人得分數', () => {
        let result = main();
        expect(result).toEqual([253, 251, 305, 191]);
    });
});