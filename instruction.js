/*It is a simple instruction to give the correct spelling of javascript or fail the test*/
const correctSpelling = "JavaScript";
let wrongSpelling = "javascrip";
function answer(correctSpelling, wrongSpelling) {
    if (correctSpelling == "JavaScript") {
        console.log("The answer is correct");
    }else if (correctSpelling == wrongSpelling) {
        console.log("Try again");
    }else {
        console.log("The answer is wrong");
    }
}
answer(correctSpelling, wrongSpelling);





