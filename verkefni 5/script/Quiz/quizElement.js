
class Quiz extends HTMLElement {

    constructor()
    {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        let wrapper = document.createElement("div");
        wrapper.className = "wrapper";

        let quiz = window[this.getAttribute("quiz")];
        this.core = new QuizCore(quiz);

        this.questionDiv = document.createElement("div");
        this.answerDiv = document.createElement("div");

        this.questionDiv.className = "question";
        this.answerDiv.className = "answers";

        this.questionTitle = document.createElement("h2");
        this.questionText = document.createElement("p");
        this.correctAnswerText = document.createElement("p");
        this.correctAnswerText.className = "correctAnswer";
        this.correctAnswerText.style.opacity = "0";
        this.correctAnswerText.style.transform = "translateY(-5px)";

        this.questionDiv.appendChild(this.questionTitle);
        this.questionDiv.appendChild(this.questionText);
        this.questionDiv.appendChild(this.correctAnswerText);

        let stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = "style/Quiz/quiz.css";

        wrapper.appendChild(stylesheet);
        wrapper.appendChild(this.questionDiv);
        wrapper.appendChild(this.answerDiv);
        this.shadow.appendChild(wrapper);

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

    displayCorrectgAnswerText()
    {
        this.correctAnswerText.innerText = "Rétt svar";
        this.correctAnswerText.style.color = "green";
        this.correctAnswerText.style.opacity = "1";
        this.correctAnswerText.style.transform = "translateX(0)";
        if (this.hideCorrectAnswerTextTimer != undefined)
        {
            clearTimeout(this.hideCorrectAnswerTextTimer);
        }
        let quizInstance = this;
        this.hideCorrectAnswerTextTimer = setTimeout(function () {
            quizInstance.correctAnswerText.style.opacity = "0";
            quizInstance.correctAnswerText.style.transform = "translateY(-5px)";
            quizInstance.hideCorrectAnswerTextTimer = undefined;
        }, 1000);
    }

    displayIncorrectAnswerText()
    {
        this.correctAnswerText.innerText = "Rangt svar";
        this.correctAnswerText.style.color = "red";
        this.correctAnswerText.style.opacity = "1";
        this.correctAnswerText.style.transform = "translateX(0)";
        if (this.hideCorrectAnswerTextTimer != undefined)
        {
            clearTimeout(this.hideCorrectAnswerTextTimer);
        }
        let quizInstance = this;
        this.hideCorrectAnswerTextTimer = setTimeout(function () {
            quizInstance.correctAnswerText.style.opacity = "0";
            quizInstance.correctAnswerText.style.transform = "translateY(-5px)";
            quizInstance.hideCorrectAnswerTextTimer = undefined;
        }, 1000);
    }

    displayEndScreen()
    {
        this.answerDiv.innerHTML = "";

        this.questionTitle.innerText = "Quiz over";
        this.questionText.innerHTML = `Þú varst með ${this.core.correctAnswerCount.toString()} rétt svör og ${this.core.incorrectAnswerCount} röng`;

        let restartButton = document.createElement("button");
        restartButton.innerText = "Reyna aftur";
        let quizInstance = this;
        restartButton.addEventListener("click", function () {
            quizInstance.core.reset();
            quizInstance.reloadQuestionView();
        }, false);
        this.answerDiv.appendChild(restartButton);
    }

    reloadQuestionView()
    {
        this.answerDiv.innerHTML = "";

        this.questionText.innerText = this.core.currentQuestion.text;
        this.questionTitle.innerText = this.core.currentQuestion.title;

        for (var ans of this.core.currentQuestion.answers) {
            let button = document.createElement("button");
            button.innerText = ans.text;
            button.dataset.ansIndex = this.core.currentQuestion.answers.indexOf(ans);
            let quizInstance = this;
            button.addEventListener("click", function () {
                quizInstance.onAnswerButtonPress(this.dataset.ansIndex);
            }, false);
            this.answerDiv.appendChild(button);
        }
    }


    onAnswerButtonPress(index)
    {
        if (this.core.isCorrect(index))
        {
            this.core.correctAnswerCount++;
            this.displayCorrectgAnswerText();
            this.nextQuestion();
        }
        else
        {
            this.core.incorrectAnswerCount++;
            this.displayIncorrectAnswerText();
            this.nextQuestion();
        }
    }

}