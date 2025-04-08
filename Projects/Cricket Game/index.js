/*==================== Score Functionality =====================*/
let scoreStr = localStorage.getItem("score");

let score = JSON.parse(scoreStr) || {
  win: 0,
  lose: 0,
  tie: 0,
};

let displayScore = () => {
  return `win: ${score.win}, lost: ${score.lose}, tie: ${score.tie}`;
};

/*==================== Computer Random Move =====================*/
let computerMove;
const computerRandomMove = () => {
  let computerRandomChoice = Math.random() * 3;
  if (computerRandomChoice <= 1) {
    computerMove = "Bat";
  } else if (computerRandomChoice <= 2) {
    computerMove = "Ball";
  } else {
    computerMove = "Stump";
  }
};

/*==================== Bat Button Functionality =====================*/
const batBtn = document.querySelector("#bat-btn");

batBtn.addEventListener("click", () => {
  computerRandomMove();
  let resultMsg;
  if (computerMove == "Bat") {
    resultMsg = "It's a tie";
    score.tie++;
  } else if (computerMove == "Ball") {
    resultMsg = "User has won";
    score.win++;
  } else {
    resultMsg = "Computer has won";
    score.lose++;
  }
  localStorage.setItem("score", JSON.stringify(score));
  alert(
    `You have Chosen Bat. Computer choice is ${computerMove}.

  ${resultMsg}.

  ${displayScore()}`
  );
});

/*==================== Ball Button Functionality =====================*/
const ballBtn = document.querySelector("#ball-btn");

ballBtn.addEventListener("click", () => {
  computerRandomMove();

  let resultMsg;
  if (computerMove == "Ball") {
    resultMsg = "It's a tie";
    score.tie++;
  } else if (computerMove == "Stump") {
    resultMsg = "User has won";
    score.win++;
  } else {
    resultMsg = "Computer has won";
    score.lose++;
  }
  localStorage.setItem("score", JSON.stringify(score));
  alert(
    `You have Chosen Ball. Computer choice is ${computerMove}.

    ${resultMsg}.
    
    ${displayScore()}`
  );
});

/*==================== Stump Button Functionality =====================*/
const stumpBtn = document.querySelector("#stump-btn");

stumpBtn.addEventListener("click", () => {
  computerRandomMove();

  let resultMsg;
  if (computerMove == "Stump") {
    resultMsg = "It's a tie";
    score.tie++;
  } else if (computerMove == "Bat") {
    resultMsg = "User has won";
    score.win++;
  } else {
    resultMsg = "Computer has won";
    score.lose++;
  }
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(
    ".heading"
  ).innerText = `You have Chosen Stump. Computer choice is ${computerMove}. 
    
    ${resultMsg}.
    
    ${displayScore()}`;
});

/*==================== Stump Button Functionality =====================*/
let resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  score = {
    win: 0,
    lose: 0,
    tie: 0,
  };
});

/*==================== Show Display Result =====================*/

function showDisplayResult() {}
