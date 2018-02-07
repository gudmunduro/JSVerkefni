
class Quiz extends HTMLElement{

    constructor(quiz)
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.core = new QuizCore(quiz);

        this.questionDiv = document.createElement("div");
        this.answearDiv = document.createElement("div");

        this.questionText = document.createElement();
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
        this.questionDiv.innerHTML = "";
        this.answearDiv.innerHTML = "";

        
    }
}

customElements.define("quiz-app", Quiz, quiz1);