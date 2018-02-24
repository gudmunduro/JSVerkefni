
function createQuiz()
{
    let answers = ["svar 1", "svar 2", "svar 3", "svar 4"];
    for (let i = 0; i < 4; i++)
    {
        var ansButton = document.createElement("a");
        ansButton.addEventListener("touchend", onAnsButtonPress);
        ansButton.innerText = answers[i];
        document.body.appendChild(ansButton);
    }
}

function onAnsButtonPress(e)
{
    e.target.style.backgroundColor = "red";
    setTimeout(function () {
        e.target.style.backgroundColor = "";
    }, 1500);
}

window.onload = function () {
    createQuiz();
}