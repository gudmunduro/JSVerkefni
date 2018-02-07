
var quiz1 = {
    questions: [
        {
            text : "Spurning 1",
            answers: [
                {text: "svar 1", correct: false},
                {text: "Svar 2", correct: true},
                {text: "Svar 3", correct: false},
                {text: "Svar 4", correct: false}
            ]
        },
        {
            text : "Spurning 2",
            answers: [
                {text: "svar 1", correct: false},
                {text: "Svar 2", correct: true}
            ]
        }
    ]
}

class QuizCore{

    constructor(quiz)
    {
        this.questions = quiz.questions;
        this.currentQuestionIndex = 0;
    }

    next()
    {
        this.currentQuestionIndex++;
    }

    isCorrect(index)
    {
        return this.currentQuestion.answers[index].correct;
    }

    get currentQuestion()
    {
        return this.questions[this.currentQuestionIndex];
    }

    get isQuizOver()
    {
        return this.questions.length <= this.currentQuestionIndex;
    }

}