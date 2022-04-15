
    
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

document.querySelector("#start").addEventListener("click",function(){
  document.querySelector("#secondQuestion").style.display="none";
  document.querySelector("#thirdQuestion").style.display="none";
  document.querySelector("#firstQuestion").style.display="block";
  document.querySelector("#fourthQuestion").style.display="none";
  document.querySelector("#start").style.display="none";
});


// WHEN I answer a question
// THEN I am presented with another question
document.querySelector("#firstQuestion").addEventListener("click",function(){
  document.querySelector("#secondQuestion").style.display="block";
  document.querySelector("#thirdQuestion").style.display="none";
  document.querySelector("#firstQuestion").style.display="none";
  document.querySelector("#fourthQuestion").style.display="none";
});

document.querySelector("#secondQuestion").addEventListener("click",function(){
  document.querySelector("#firstQuestion").style.display="none";
  document.querySelector("#thirdQuestion").style.display="block";
  document.querySelector("#secondQuestion").style.display="none";
  document.querySelector("#fourthQuestion").style.display="none";
});

document.querySelector("#thirdQuestion").addEventListener("click",function(){
  document.querySelector("#firstQuestion").style.display="none";
  document.querySelector("#secondQuestion").style.display="none";
  document.querySelector("#thirdQuestion").style.display="none";
  document.querySelector("#fourthQuestion").style.display="block";
});

document.querySelector("#fourthQuestion").addEventListener("click",function(){
  document.querySelector("#firstQuestion").style.display="none";
  document.querySelector("#secondQuestion").style.display="none";
  document.querySelector("#thirdQuestion").style.display="none";
  document.querySelector("#fourthQuestion").style.display="none";
  document.querySelector("#end-screen").style.display="block";


});

document.querySelector("#submit").addEventListener("click",function(){
  document.querySelector("#firstQuestion").style.display="none";
  document.querySelector("#secondQuestion").style.display="none";
  document.querySelector("#thirdQuestion").style.display="none";
  document.querySelector("#fourthQuestion").style.display="none";
  document.querySelector("#highscores").style.display="block";


});



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');


// Timer that counts down from 5
function countdown() {
  var timeLeft = 50;

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

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```