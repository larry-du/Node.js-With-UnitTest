const getArrayResult = require("./Q9-module")
describe('Q9測試', () => {
    test('合併結果：[10, 10, 10, 10, 10]', () => {
        const arr1 = [2, 3, 1, 7, 9];
        const arr2 = [8, 7, 9, 3, 1];
        const result = getArrayResult(arr1, arr2);
        expect(result).toContain(10, 10, 10, 10, 10);
    })
});

