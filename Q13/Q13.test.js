const rabbitResetToWinSec = require("./Q13-module")

describe('正常情況', () => {
    test('兔子偷懶還可以贏的時間', () => {
        const rabbitSpeed = 20;//1sec
        const turtleSpeed = 0.28;//1sec
        const totalDistance = 1000;
        const rabbitBackSec = 5;
        const result = rabbitResetToWinSec(rabbitSpeed, turtleSpeed, totalDistance, rabbitBackSec)
        expect(result).toBe(3519.92857)
    });

});