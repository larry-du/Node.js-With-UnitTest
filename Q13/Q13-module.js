//### 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?世界上最快記錄!!
//2018年8月23日，烏龜界的記錄: 每秒跑0.28公尺 (號稱「龜界博爾特」)
//2017年12月12日的兔子界記錄: 每秒20公尺
function rabbitResetToWinSec(rabbitSpeed, turtleSpeed, totalDistance, rabbitBackSec) {
    const rabbitOriginFinishTime = totalDistance / rabbitSpeed;
    const turtleFinishTime = (totalDistance / turtleSpeed).toFixed(5) * Math.pow(10, 5) / Math.pow(10, 5);
    const rabbitProvocativeTime = (rabbitOriginFinishTime / rabbitBackSec) / rabbitSpeed + rabbitOriginFinishTime;
    return turtleFinishTime - rabbitProvocativeTime - 1
}

// function rabbit() {
//     for (let i = 0; i < totalDistance / rabbitSpeed; i++) {
//         return i;
//     };
//     for (let i = 0; i < 10; i++) {
//         if (i % 5 === 0) {

//         }
//     }
// };

// function turtleSpeed() {
//     const turtleFinishTime = (totalDistance / turtleSpeed).toFixed(5) * Math.pow(10, 5) / Math.pow(10, 5);
//     for (let i = 0; i < turtleFinishTime; i++) {
//         return i
//     }
// }


module.exports = rabbitResetToWinSec

