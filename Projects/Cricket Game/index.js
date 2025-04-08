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

/*==================== Result Msg Functionality =====================*/
let resultMsg;
const result = () => {
  if (computerMove == "Bat") {
    resultMsg = "It's a tie";
  } else if (computerMove == "Ball") {
    resultMsg = "User has won";
  } else {
    resultMsg = "Computer has won";
  }
};

/*==================== Bat Button Functionality =====================*/
const batBtn = document.querySelector("#bat-btn");

batBtn.addEventListener("click", () => {
  computerRandomMove();
  result();
  alert(
    `You have Chosen Bat. Computer choice is ${computerMove}. ${resultMsg}.`
  );
});

/*==================== Ball Button Functionality =====================*/
const ballBtn = document.querySelector("#ball-btn");

ballBtn.addEventListener("click", () => {
  computerRandomMove();
  result();
  alert(
    `You have Chosen Ball. Computer choice is ${computerMove}. ${resultMsg}.`
  );
});

/*==================== Stump Button Functionality =====================*/
const stumpBtn = document.querySelector("#stump-btn");

stumpBtn.addEventListener("click", () => {
  computerRandomMove();
  result();
  alert(
    `You have Chosen Stump. Computer choice is ${computerMove}. ${resultMsg}.`
  );
});
