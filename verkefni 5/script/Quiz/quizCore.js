
class QuizCore{

    constructor(quiz)
    {
        this.questions = quiz.questions;
        this.currentQuestionIndex = 0;
        this.incorrectAnswerCount = 0;
        this.correctAnswerCount = 0;
    }

    next()
    {
        this.currentQuestionIndex++;
    }

    isCorrect(index)
    {
        return this.currentQuestion.answers[index].correct;
    }

    reset()
    {
        this.currentQuestionIndex = 0;
        this.incorrectAnswerCount = 0;
        this.correctAnswerCount = 0;
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