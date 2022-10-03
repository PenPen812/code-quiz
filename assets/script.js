var viewScore = document.getElementById("view-score")
var navTag = document.getElementById("#navmenu")
var button = document.querySelector(".btn")
var headerTag = document.querySelector("header")
var content = document.querySelector("h3")
var button = document.querySelector("btn")

viewScore.setAttribute("style","text-decoration: none;","color:rgb(249, 136, 155)")
navTag.setAttribute("style", "display: flex;","justify-content: space-between;")
button.setAttribute("style","font-size: 25px;","padding: 20px;","width:50px;","display: flexbox;","flex-direction: row;","justify-content:center;","align-content: center;","color:white;","background-color: lightcoral;","border-radius: 15px;","text-decoration: none;","text-align: center")
headerTag.setAttribute("style","width: 100%;","display: flex;","flex-direction: row;","padding: auto;","margin: 50px;","font-size: 20px;","text-decoration: none;","justify-content: center;","align-items: center;","font-size: 60px;")
content.querySelector("style","line-height: 50px;","margin: 100px;","display: flex;","flex-direction: row;","justify-content: center;","align-items: center;","text-align: center;")

//1. timer on the question page
var timerEl = document.getElementById("#timer")
var timer = 60



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

// 2. Questions are present automatically after the answer


// 3. Time subtracted if the answer is incorrect
// 4.Game is Over when all questions are answered

// 5. Name initial and the scoreboard will show after the game is over