var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start");
var timeleft = 15; 


function startTimer() {
    
    //Here goes the code for that we want startTimer to actually do
   
    var timerEl = setInterval(startTimer, 1000);
}

startButton.addEventListener("click", startTimer)}

/* <div class="timer">Time: <span id="time">10</span></div>
<button id="start" id="onclick">Start Quiz</button>*/