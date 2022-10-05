var viewScore = document.getElementById("view-score")
var navTag = document.getElementById("#navmenu")
var button = document.querySelector(".btn")
var headerTag = document.querySelector("header")
var content = document.querySelector("h3")
var button = document.querySelector("btn")



//1. timer on the question page
var timerEl = document.getElementById("timer");
var timer = 60;
var highScore = 0;



function setTime() {
    var timerInterval = setInterval(function () {
        timerEl.innerHTML = timer
            timer--;
        if (timer === 0) {
            clearInterval(timerInterval)
            sendMessage()
        }
    }, 1000)
}
// setTime();


// 2. Questions are present automatically after the answer
var quiz = [{
    question: "What is ...?",
    answers: [
        { answer: "1. ________", correct: false },
        { answer: "2. ________", correct: false },
        { answer: "3. ________", correct: true },
        { answer: "4. ________", correct: false }
    ]
}, {
    question: "why ...?",
    answers: [
        { answer: "1. ________", correct: false },
        { answer: "2. ________", correct: false },
        { answer: "3. ________", correct: true },
        { answer: "4. ________", correct: false }
    ]
}
];
quiz.forEach(function(e){
    //This will attach the quiz on the webpage

});
// 3. Time subtracted if the answer is incorrect
function checkAnswer(isCorrect) {
    if (isCorrect) {
        }  else { } }
    

// 4.Game is Over when all questions are answered

// 5. Name initial and the scoreboard will show after the game is over