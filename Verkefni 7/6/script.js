
var resetAnsButtonColorTimer = undefined;
var currentRedButton = undefined;

function createQuiz()
{
    let answers = ["svar 1", "svar 2", "svar 3", "svar 4"];
    for (let i = 0; i < 4; i++)
    {
        var ansButton = document.createElement("a");
        ansButton.addEventListener("click", onAnsButtonPress);
        ansButton.innerText = answers[i];
        document.body.appendChild(ansButton);
    }
}

function onAnsButtonPress(e)
{
    if (window.resetAnsButtonColorTimer != undefined)
    {
        clearTimeout(window.resetAnsButtonColorTimer);
        window.currentRedButton.style.backgroundColor = "";
        window.resetAnsButtonColorTimer = undefined;

    }
    e.target.style.backgroundColor = "red";
    window.currentRedButton = e.target;
    window.resetAnsButtonColorTimer = setTimeout(function () {
        e.target.style.backgroundColor = "";
        window.resetAnsButtonColorTimer = undefined;
    }, 1500);
}

window.onload = function () {
    createQuiz();
}