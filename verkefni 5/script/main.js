
var quiz1 = {
    questions: [
        {
            title: "Spuring 1",
            text : "Hvernig eru takkarnir á litinn?",
            answers: [
                {text: "#3949AB", correct: false},
                {text: "#673AB7", correct: false},
                {text: "#3F51B5", correct: true},
                {text: "#2196F3", correct: false}
            ]
        },
        {
            title: "Spurining 2",
            text : "Númer hvað er þessi spurning?",
            answers: [
                {text: "1", correct: false},
                {text: "2", correct: true}
            ]
        }
    ]
}

window.onload = function () {
    customElements.define("quiz-app", Quiz);
}