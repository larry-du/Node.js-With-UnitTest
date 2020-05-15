const printStar = require('./Q7')

describe('正常情況ˋ', () => {
    test('印星星', () => {
        var fakeStar =
            '  ** **  \n' +
            ' ******* \n' +
            '*********';
        let arr = printStar(3)
        arr.join()
        // printStar(3)
        expect(printStar(3)).toMatch(fakeStar);
    });
});

