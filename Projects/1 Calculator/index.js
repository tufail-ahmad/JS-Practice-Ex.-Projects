// dark mode toggle functionality
let toggleBallDM = localStorage.getItem("toggleBallDM");
let darkMode = localStorage.getItem("darkmode");
const toggleBtn = document.querySelector("#checkbox");
const toggleBall = document.querySelector(".toggle-ball");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.removeItem("darkmode"); // remove instead of storing null
};

const enableToggleBallDM = () => {
  toggleBall.classList.add("js-toggle-ball");
  localStorage.setItem("toggleBallDM", "active");
};

const disableToggleBallDM = () => {
  toggleBall.classList.remove("js-toggle-ball");
  localStorage.removeItem("toggleBallDM"); // remove instead of storing null
};

// If storage already says active, reflect that visual state
if (toggleBallDM === "active") enableToggleBallDM();
if (darkMode === "active") enableDarkMode();

// When user toggles, update both UI and storage
toggleBtn.addEventListener("change", () => {
  if (toggleBtn.checked) {
    enableToggleBallDM();
    enableDarkMode();
  } else {
    disableToggleBallDM();
    disableDarkMode();
  }
});

// Restore checkbox state on page load from the same storage keys
window.addEventListener("DOMContentLoaded", () => {
  // Prefer using the existing `darkmode` value to determine checked state
  const darkModeStored = localStorage.getItem("darkmode");
  toggleBtn.checked = darkModeStored === "active";

  // (Optional) If you still want a separate key that stores true/false:
  // localStorage.setItem("myCheckboxChecked", toggleBtn.checked ? "true" : "false");
  // But don't call that on load before reading it — only update it when user changes.
});

/* Calculator Functionality */
let input1 = document.querySelector(".display");
let input2 = document.querySelector(".display2");
let buttons = document.querySelectorAll(".btn");
let allClearBtn = document.querySelector("#all-clear");
let backspaceBtn = document.querySelector("#backspace-btn");
let displayValue = "";

let arr = Array.from(buttons);
// console.log(arr);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      displayValue = eval(displayValue);
      input1.value = displayValue;
      input2.value = "";
    } else {
      displayValue += e.target.innerHTML;
      input2.value = displayValue;
      input1.value = "";
    }
  });
});

allClearBtn.addEventListener("click", (e) => {
  displayValue = "";
  input1.value = displayValue;
  input2.value = displayValue;
});

backspaceBtn.addEventListener("click", (e) => {
  displayValue = displayValue.substring(0, displayValue.length - 1);
  input2.value = displayValue;
});
