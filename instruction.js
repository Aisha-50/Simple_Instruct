/*It is a simple instruction to give the correct spelling of javascript or fail the test*/
const correctSpelling = "JavaScript";
function answer(correctSpelling) {
    if (correctSpelling == "JavaScript") {
        console.log("The answer is correct");
    }else if (correctSpelling == "javascrip") {
        console.log("Try again");
    }else {
        console.log("The answer is wrong");
    }
}
answer(correctSpelling)





