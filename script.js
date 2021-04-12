"use strict";

function numberGame() {
  const number = Math.trunc(Math.random() * 20) + 1;
  ///////
  // document.querySelector('.number').textContent = number;

  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";

  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // var score = document.querySelector('.score').textContent;
    if (!guess) {
      document.querySelector(".message").textContent = "🚨 Invalid number..";
    }
    if (guess) {
      if (number > guess) {
        document.querySelector(".message").textContent = "📉Too Low";
        document.querySelector(".score").textContent--;
      }

      if (number < guess) {
        document.querySelector(".message").textContent = "📈Too High";
        document.querySelector(".score").textContent--;
      }

      if (number == guess) {
        document.querySelector(".message").textContent = "🏆 Correct Answer";
        if (
          document.querySelector(".highscore").textContent <
          document.querySelector(".score").textContent
        ) {
          document.querySelector(
            ".highscore"
          ).textContent = document.querySelector(".score").textContent;
        }

        document.querySelector("body").style.backgroundColor = "#60b347";
      }

      document.querySelector(".again").addEventListener("click", function () {
        numberGame();
      });
    }
  });
}

numberGame();
