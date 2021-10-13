const assertEquals = (x, y) => x === y;

const resultReport = result => {
    return {
        bg: result ? `\x1b[42m` : `\x1b[41m`,
        text: result ? `PASS` : `FAIL`,
        defaultBg: `\x1b[40m`,
        failFg: `\x1b[31m%s\x1b[0m`
    }
};

const printResult = ({ testName, result, expectedOutput, actualOutput }) => {
    const { bg, text, defaultBg, failFg } = resultReport(result);
    console.log(testName);
    console.log(result);
    console.log(bg, text, defaultBg);
    if (!result) {
        console.log(failFg, `${expectedOutput} (EXPECTED) does not equal ${actualOutput} (ACTUAL)`);
    }
    console.log(`=========================`);
}

module.exports = {
    assertEquals,
    printResult
};