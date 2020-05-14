const { main } = require("./Q6")
describe('非正常情況ˋ', () => {
    test('空字串!! 請輸入英文字', () => {
        expect(() => {
            main.confirmFormat(' ');
        }).toThrow("請輸入英文字");
    });
    test('數字!! 請輸入英文字', () => {
        expect(() => {
            main.confirmFormat('123');
        }).toThrow("請輸入英文字");
    });
    test('特殊符號!! 請輸入英文字', () => {
        expect(() => {
            main.confirmFormat('%^#$');
        }).toThrow("請輸入英文字");
    });

});
describe('正常情況ˋ', () => {
    test('請輸入英文名字', () => {
        const strInput1 = "apple";
        const strInput2 = "banana";
        const strInput3 = "orange";
        const strInput4 = "fruit";
        main.confirmFormat(strInput1)
        main.confirmFormat(strInput2)
        main.confirmFormat(strInput3)
        main.confirmFormat(strInput4)
        expect(main.searchAlphabets()).toContain('a', 'p', 'e', 'o', 'a', 'g');
    });
});
