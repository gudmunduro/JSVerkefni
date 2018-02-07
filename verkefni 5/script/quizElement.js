
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

        this.reloadQuestionView();
    }

    nextQuestion()
    {
        this.core.next();
        if (this.core.isQuizOver)
        {
            this.displayEndScreen();
        }
        else
        {
            this.reloadQuestionView();
        }
    }

    displayEndScreen()
    {
        this.answearDiv.innerHTML = "";

        this.questionText.innerText = "Quiz over";
    }

    reloadQuestionView()
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
                quizInstance.onAnswerButtonPress(this.dataset.ansIndex);
            }
            this.answearDiv.appendChild(button);
        }
    }

    onAnswerButtonPress(index)
    {
        if (this.core.isCorrect(index))
        {
            this.nextQuestion();
        }
        else
        {
            alert("Incorrect");
        }
    }

}