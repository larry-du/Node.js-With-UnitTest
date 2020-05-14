const { main } = require("./Q6")
const rl = require("./readline");
(function askName1(rl) {
    rl.question('請輸入第一個名字:', strInput1 => {
        try {
            main.confirmFormat(strInput1);
            askName2(strInput1);
        } catch (error) {
            console.log(error.message);
            askName1(rl);
        }
    });
})(rl);

function askName2(strInput1) {
    rl.question('請輸入第二個名字:', strInput2 => {
        try {
            main.confirmFormat(strInput2);
            askName3(strInput2);
        } catch (error) {
            console.log(error.message);
            askName2(strInput1);
        }
    });
};

function askName3(strInput2) {
    rl.question('請輸入第三個名字:', strInput3 => {
        try {
            main.confirmFormat(strInput3);
            askName4(strInput3);
        } catch (error) {
            console.log(error.message);
            askName3(strInput2);
        }
    });
};

function askName4(strInput3) {
    rl.question('請輸入第四個名字:', strInput4 => {
        try {
            main.confirmFormat(strInput4);
            console.log("第一和第三個名字的單數個字母:", main.searchAlphabets());
            rl.close();
        } catch (error) {
            console.log(error.message);
            askName4(strInput3);
        }
    });
};