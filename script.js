// var timerEl = document.getElementById("timer");
// var startButton = document.getElementById("time");
// var timeleft; 


// function startTimer() {
    
//     //Here goes the code for that we want startTimer to actually do
   
//     var timer = setInterval(startTimer, 1000);
  
//       // Sets timer
//       timer = setInterval(function() {
      
//         if (timerCount >= 0) {
//           // Tests if win condition is met
//           if (isWin && timerCount > 0) {
//             // Clears interval and stops timer
//             clearInterval(timer);
//             winGame();
//           }
//         }
//         // Tests if time has run out
//         if (timerCount === 0) {
//           // Clears interval
//           clearInterval(timer);
//           loseGame();
//         }
//       }, 1000);

// }


// startButton.addEventListener("click", startTimer)


// function startGame() {
//     isWin = false;
//     timerCount = 10;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     renderBlanks()
//     startTimer()
//   }
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
  end-screen

});

document.querySelector("#submit").addEventListener("click",function(){
  document.querySelector("#firstQuestion").style.display="none";
  document.querySelector("#secondQuestion").style.display="none";
  document.querySelector("#thirdQuestion").style.display="none";
  document.querySelector("#fourthQuestion").style.display="none";
  document.querySelector("feedback").style.display="block";
  end-screen

});



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```