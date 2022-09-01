// Creating the quiz class

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        console.log(this.getQuestionIndex());
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.getQuestionIndex === this.questions.length;
    }
};

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
};

// Displaying the question

function displayQuestion () {
    if (quiz.isEnded()) {
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
};

// This is the guess function

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// This function shows the quiz progress

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// This function shows the quiz score

function showScores() {
    let quizEndHTML =
    `
        <h1> Quiz Completed </h1>
        <h2 id="score"> You scored ${quiz.score} out of ${quiz.questions.length}</h2>
        <div class="quiz-repeat">
            <a href="index.html"> Try Quiz Again </a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// Quiz questions' creation

let questions = [
    new Question(
        "What property is used to create space between the element’s border and inner content?", 
        ["border", "padding", "spacing", "margin", "none"], "padding"
        ),
    new Question(
        "Which is the appropriate HTML tag used for the largest heading?", 
        ["head", "h1", "h6", "heading", "none",], "heading"
        ),
    new Question(
        "In CSS, which property is used to set the spacing in between lines of text?", 
        ["letter-spacing", "line-height", "line-spacing", "spacing", "none"], "line-height"
        ),
    new Question(
            "Which is the appropriate HTML tag for inserting a line break?", 
            ["brbr", "br", "break", "lb", "none"], "br"
        ),
    new Question(
        "In CSS, what is the correct option to select all the tags on a page?", 
        ["p { }", "#p { }", "<p> { }", ".p { }", "none"], "p { }"
        ),
    new Question(
        "In JS, which of the following will return the type of the arguments passed to a function?", 
        ["using getType function", "using typeof operator", "using typeof argument", "all of the above", "none"], "using typeof operator"
        ),
    new Question(
        "Which of the following function of String object returns the capitalized string while respecting the current locale?", 
        ["substring()", "toString()", "toUpperCase()", "toLocaleUpperCase()", "none"], "toLocaleUpperCase()"
        ),
    new Question(
        "What is the function of Array object that runs through each element of the array?", 
        ["concat()", "forEach()", "every()", "filter()", "none"], "forEach()"
        ),
    new Question(
        "Which of the following method of Boolean object returns a string depending upon the value of the object?", 
        ["toSource()", "valueOf()", "toString()", "stringValue", "none"], "toString()"
        ),
    new Question(
        "What is the function of Array object that adds and/or removes elements from an array?", 
        ["unshift()", "splice()", "sort()", "toSource()", "none"], "splice()"
        ),
];

let quiz = new Quiz(questions);

// Displaying the questions

displayQuestion();

// Adding the countdown

quizTime = 60;

let countdown = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTimer <= 0) {
            clearInterval(quizTimer);
        } else {
            quizTime--;
            countdown.innerHTML = `TIME: ${quizTime}`;
        }
    }, 1000)
};

startButton = document.getElementById("start");

startButton.addEventListener('click', event => {
    console.log('clicked');
    startCountdown(); 
    startButton.disabled = true;
    startButton.style.backgroundColor = "grey";
});
