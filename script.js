// var timerEl = document.getElementById("timer");
// var startButton = document.getElementById("start");
// var timeleft = 15; 


// function startTimer() {
    
//     //Here goes the code for that we want startTimer to actually do
   
//     var timerEl = setInterval(startTimer, 1000);
//   if ()

// }


// startButton.addEventListener("click", startTimer)


var timerEl = document.getElementById('start');
var mainEl = document.getElementById('main');
var startButton = document.getElementById("start");

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');



function countdown() {
    var timeLeft = 15;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
  startButton.addEventListener("click", startTimer)