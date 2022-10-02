// 1. timer on the question page
var timer = 60;
var timerEl = document.getElementById("timer");

function setTime() {
    var timerInterval = setInterval(function () {
        timerEl.timer = timer
        if (timer === 0) {
            clearInterval(timerInterval)
            sendMessage()
        }
    }, 1000)
}

// 2. Questions are present automatically after the answer


// 3. Time subtracted if the answer is incorrect
// 4.Game is Over when all questions are answered

// 5. Name initial and the scoreboard will show after the game is over