
class Quiz extends HTMLElement {

    constructor()
    {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        let quiz = window[this.getAttribute("quiz")];
        this.core = new QuizCore(quiz);

        this.questionDiv = document.createElement("div");
        this.answearDiv = document.createElement("div");

        this.questionText = document.createElement("h2");
        this.questionDiv.appendChild(this.questionText);

        this.shadow.appendChild(this.questionDiv);
        this.shadow.appendChild(this.answearDiv);

        this.reloadQuestion();
    }

    newQuestion()
    {
        this.core.next();
        if (this.core.isQuizOver)
        {
            this.displayEndScreen();
        }
        else
        {
            this.reloadQuestion();
        }
    }

    displayEndScreen()
    {

    }

    reloadQuestion()
    {
        this.answearDiv.innerHTML = "";

        this.questionText.innerText = this.core.currentQuestion.text;

        for (var ans of this.core.currentQuestion.answers) {
            let button = document.createElement("button");
            button.innerText = ans.text;
            button.dataset.ansIndex = this.core.currentQuestion.answers.indexOf(ans);
            button.dataset.quizInstance = this;
            var quizInstance = this;
            button.onclick = function () {
                quizInstance.onAnswerButtonPress();
            }
            this.answearDiv.appendChild(button);
        }
    }

    // button events
    onAnswerButtonPress()
    {
        if (this.core.isCorrect(this.dataset.ansIndex))
        {
            this.newQuestion();
        }
        else
        {
            alert("Incorrect");
        }
    }

}