const umleven = require('./Q5')

describe('非正常情況ˋ', () => {
    test('空字串!! 請重新輸入', () => {
        expect(() => {
            umleven(' ');
        }).toThrow("空字串!! 請重新輸入");
    });
    test('字串!! 請重新輸入', () => {
        expect(() => {
            umleven('stringTest');
        }).toThrow("字串!! 請重新輸入");
    });
    test('負數!! 請重新輸入', () => {
        expect(() => {
            umleven('-12');
        }).toThrow("負數!! 請重新輸入");
    });
    test('小數!! 請重新輸入', () => {
        expect(() => {
            umleven('12.123');
        }).toThrow("小數!! 請重新輸入");
    });
    test('小於 4 需輸入 4 以上偶數', () => {
        expect(() => {
            umleven('2');
        }).toThrow("需輸入 4 以上偶數");
    });
    test('奇數!! 請重新輸入', () => {
        expect(() => {
            umleven('9');
        }).toThrow("奇數!! 需輸入 4 以上偶數");
    });
});

describe('正常情況ˋ', () => {
    test('請輸入 4 以上偶數', () => {
        expect(umleven('8')).toMatch("2 * 4 + 4 * 6 + 6 * 8 = 80");
    });
});