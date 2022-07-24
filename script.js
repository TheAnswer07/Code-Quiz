// Creating the quiz class

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.question[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isRightAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isFinished() {
        return this.getQuestionIndex === this.question.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isRightAnswer(choice) {
        return this.answer === choice;
    }
}

// Displaying the question

function displayQuestion() {
    if (quiz.isFinished()) {
        showScores();
    } else {
        // this will show the question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // this will show the different options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

// This function shows the quiz progress

function showProgress() {
    let currentQuestionNbr = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNbr} of ${quiz.question.length}`;
}

// This function shows the quiz score

function showScores() {
    let quizEndHtml =
    `
        <h1> Completed </h1>
        <h2> You scored ${quiz.score} out of ${quiz.question.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html"> Try Quiz Again </a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHtml;
}

// Quiz questions' creation

let questions = [
    new Question(
        "What property is used to create space between the element’s border and inner content?", 
        ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
        "Which is the appropriate HTML tag used for the largest heading?", 
        ["Head", "h1", "h6", "Heading", "none",], "Heading"
        ),
    new Question(
        "In CSS, which property is used to set the spacing in between lines of text?", 
        ["letter-spacing", "line-height", "line-spacing", "spacing", "none"], "padding"
        ),
    new Question(
            "What property is used to create space between the element’s border and inner content?", 
            ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
        "What property is used to create space between the element’s border and inner content?", 
        ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
        "What property is used to create space between the element’s border and inner content?", 
        ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
        "What property is used to create space between the element’s border and inner content?", 
        ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
            "What property is used to create space between the element’s border and inner content?", 
            ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
        "What property is used to create space between the element’s border and inner content?", 
        ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
        "What property is used to create space between the element’s border and inner content?", 
        ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
]
