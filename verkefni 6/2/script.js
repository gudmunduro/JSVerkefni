
function createElements()
{
    console.log("!");
    let answers = ["Svarmöguleiki 1", "Svarmöguleiki 2"]
    let quizMainDiv = document.createElement("div");
    let questionDiv = document.createElement("div");
    let answersDiv = document.createElement("div");

    quizMainDiv.className = "quiz";
    questionDiv.id = "question";
    questionDiv.appendChild(document.createTextNode("Spurning 1"));
    answersDiv.id = "answers";

    for (let answer of answers)
    {
        let answerDiv = document.createElement("div");
        answerDiv.dataset.active = "answer";
        answerDiv.appendChild(document.createTextNode(answer));
        answersDiv.appendChild(answerDiv);
    }

    quizMainDiv.appendChild(questionDiv);
    quizMainDiv.appendChild(answersDiv);
    document.body.appendChild(quizMainDiv);

}

window.onload = function () {
    createElements();
}